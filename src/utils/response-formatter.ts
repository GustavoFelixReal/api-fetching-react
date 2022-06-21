import { IResponse } from "../types";

interface IMakeResponseOptions<T> {
  data: T
  status: number
}

export function makeResponse<T>({ data, status }: IMakeResponseOptions<T>): IResponse<T> {
  return {
    status,
    response: data
  }
}