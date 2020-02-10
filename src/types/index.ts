export type ErrorHttpType = {
  status: number;
};

export type FillActionType<T> = (payload: T) => {
  type: string;
  payload: T;
};

export type ErrorActionType = (payload: ErrorHttpType) => {
  type: string;
  payload: ErrorHttpType;
};
