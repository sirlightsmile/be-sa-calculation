import * as R from 'ramda'

export const isExist = <T>(obj: T | undefined): obj is T => {
  return !R.isNil(obj) && !R.isEmpty(obj)
}

/**
 * Validation all object in array
 * @param data array object
 * @param isValid validation function for object in array
 */
export const isValidArrayData = <T>(data: unknown, isValid: (data: unknown) => data is T): data is T[] => {
  let isValidData = data !== undefined && Array.isArray(data)

  if (isValidData) {
    const invalidData = R.any((value) => {
      return !isValid(value)
    })(data as unknown[])
    isValidData = !invalidData
  }

  return isValidData
}
