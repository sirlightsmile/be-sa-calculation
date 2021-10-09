import { isErrorType } from 'src/types/error'

export interface ResponseError {
  errorMessage: string
  errorCode?: number
}

export const getResponseError = (message: string, errorCode?: number): ResponseError => {
  return { errorMessage: message, errorCode: errorCode }
}

export const getResponseErrorFromCatch = (error: unknown, errorCode?: number): ResponseError => {
  return getResponseError(isErrorType(error) ? error.message : 'Unknown error', errorCode)
}
