export const isErrorType = (data: unknown): data is Error => {
  const errorObj = data as Error
  return errorObj?.message !== undefined
}