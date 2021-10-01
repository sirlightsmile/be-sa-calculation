interface ErrorMessage {
  message: string
}

export const isErrorMessage = (data: unknown): data is ErrorMessage => {
  const errorObj = data as ErrorMessage
  return errorObj?.message !== undefined
}
