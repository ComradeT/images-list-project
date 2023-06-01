import { AsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { useCallback, useState } from 'react';
import { useAppDispatch } from 'store';
import { DefaultRejectValue, ExtraParamsThunkType } from 'types';

const useAsyncAction = <Returned, ThunkArg, RejectValue = DefaultRejectValue>(
  action: AsyncThunk<Returned, ThunkArg, ExtraParamsThunkType<RejectValue>>,
) => {
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const execute = useCallback(
    async (actionPayload?: ThunkArg) => {
      try {
        setIsExecuting(true);
        const payload = (actionPayload || undefined) as ThunkArg;
        const thunkResult = await dispatch(action(payload));
        return unwrapResult(thunkResult);
      } finally {
        setIsExecuting(false);
      }
    },
    [action, dispatch],
  );

  return [execute, isExecuting] as const;
};

export default useAsyncAction;
