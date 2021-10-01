import { IsNotEmpty } from 'class-validator'

interface MockCalculateParams {
  paramsA: string
  paramsB: string
}

export class CalcParams implements MockCalculateParams {
  @IsNotEmpty()
  paramsA: string

  @IsNotEmpty()
  paramsB: string
}
