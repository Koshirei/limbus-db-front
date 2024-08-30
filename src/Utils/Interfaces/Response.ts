export interface Response<T> {
  response: string,
  message: string,
  code: number,
  data: T
}