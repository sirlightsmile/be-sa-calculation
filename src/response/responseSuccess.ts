export type ResponseSuccess<T> = {
  result: T
}

export const getResponseSuccess = <T>(data: T): ResponseSuccess<T> => {
  return { result: data }
}
