import { CalcController } from './calc.controller'

describe('CalcController', () => {
  let controller: CalcController
  beforeEach(() => {
    controller = new CalcController()
  })

  describe('index', () => {
    it('should return an object of inputted data', async () => {
      const result = {
        helloWorld: 'paramsA : paramsB',
      }

      expect(
        await controller.index({
          paramsA: 'paramsA',
          paramsB: 'paramsB',
        }),
      ).toMatchObject(result)
    })
  })
})
