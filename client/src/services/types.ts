import { AxiosResponse } from 'axios';

export interface Response<T> {
  data: T,
  msg?: string
}

export type ApiResponse<T> = AxiosResponse<Response<T>>

export type FilterStates = {
  minYear: number;
  maxYear: number;
  minKM: number;
  maxKM: number;
  smoking: string;
};