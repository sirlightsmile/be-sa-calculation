import { Controller, Get, Query } from '@nestjs/common'
import { CalcParams } from '../dto/calc.dto'

@Controller('calc')
export class CalcController {
  @Get()
  index(@Query() params: CalcParams): { [key: string]: string } {
    return {
      helloWorld: `${params.paramsA} : ${params.paramsB}`,
    }
  }
}
