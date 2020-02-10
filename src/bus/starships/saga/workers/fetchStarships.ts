// Instruments
import {
  startFetching, stopFetching, fill, setFetchingError,
} from '../../actions';

import { api } from '../../../../api';
import { makeRequestWithSpinner } from '../../../../workers';
import { Starships } from '../../types';

export function* fetchStarships(): Generator {
  const options = {
    fetcher: api.starships.fetch,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setFetchingError,
  };

  yield makeRequestWithSpinner<Starships>(options);
}
