import moment from 'moment';

export const formatDate = (date, format) => moment(date).format(format);

export const fetchWrapper = (input, init = { headers: {} }) => {
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