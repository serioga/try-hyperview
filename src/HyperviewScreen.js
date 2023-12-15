import { MAIN_STACK_NAME, MODAL_STACK_NAME } from './constants';
import HandleBack from './HandleBack';
import Hyperview from 'hyperview';
import React from 'react';
import moment from "moment";

export default (props) => {
  const entrypointUrl = props.route.params?.url;

  if (!entrypointUrl) {
    return null;
  }

  const goBack = () => {
    props.navigation.pop();
  }

  const closeModal = () => {
    props.navigation.pop();
  }

  const push = (params) => {
    // If we're in a modal stack, push the next screen on the modal stack.
    // If we're in the main stack, push the next screen in the main stack.
    // Modal stacks will have modal param set.
    const modal = props.route.params?.modal ?? false;
    props.navigation.push(
      modal ? MODAL_STACK_NAME : MAIN_STACK_NAME,
      {
        modal,
        ...params,
      }
    );
  }

  const fetchWrapper = (input, init = { headers: {} }) => {
    return fetch(input, {
      ...init,
      mode: "cors",
      headers: {
        // Don't cache requests for the demo
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Expires: '0',
        Pragma: 'no-cache',
        ...init.headers,
      }
    });
  }

  const formatDate = (date, format) => moment(date).format(format);

  const navigate = (params, key) => {
    props.navigation.navigate({ key, params, routeName: MAIN_STACK_NAME });
  }

  const openModal = (params) => {
    props.navigation.push(MODAL_STACK_NAME, params);
  }

  return (
    <HandleBack>
      <Hyperview
        back={goBack}
        closeModal={closeModal}
        entrypointUrl={entrypointUrl}
        fetch={fetchWrapper}
        formatDate={formatDate}
        navigate={navigate}
        navigation={props.navigation}
        openModal={openModal}
        push={push}
        route={props.route}
      />
    </HandleBack>
  );
}
