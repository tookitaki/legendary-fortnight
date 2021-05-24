import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { usePrevious } from './general';

import { isLoadingSelector } from '../selectors/network';

export const useRequestIsDone = (actionType, callback) => {
  const isLoading = useSelector((state) =>
    isLoadingSelector(state, actionType)
  );

  const prevIsLoading = usePrevious(isLoading);

  useEffect(() => {
    if (prevIsLoading && !isLoading) {
      callback();
    }
  }, [callback, isLoading, prevIsLoading]);
};
