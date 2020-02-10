import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAsync } from '../actions';
import { AppState } from '../../../init/rootReducer';
import { StarshipsState } from '../reducer';

export const useStarshipsFetch = (): StarshipsState => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector(
    (state: AppState): StarshipsState => state.starships,
  );

  return {
    data,
    isFetching,
    error,
  };
};
