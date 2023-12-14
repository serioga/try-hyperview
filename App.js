import Hyperview from 'hyperview';
import { ENTRY_POINT_URL } from './src/constants';
import { fetchWrapper, formatDate } from './src/helpers';

export default function App () {
  console.log("ENTRY_POINT_URL", ENTRY_POINT_URL)
  return (
    <Hyperview entrypointUrl={ ENTRY_POINT_URL }
               fetch={ fetchWrapper }
               formatDate={ formatDate }/>
  );
}
