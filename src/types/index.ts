import { RootState } from 'store';

export type ExtraParamsThunkType<T = DefaultRejectValue> = {
  rejectValue: T;
  state: RootState;
};

export interface DefaultRejectValue {
  message?: string[] | string;
  statusCode?: number;
  error?: string;
}
