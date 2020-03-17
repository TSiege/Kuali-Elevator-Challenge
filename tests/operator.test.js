const Elevator = require('../elevator')
const Operator = require('../operator')

describe('Operator', () => {
  let operator
  beforeEach(() => {
    const elevators = [1, 1, 1, 1].map(floor => new Elevator({ floor }))
    operator = new Operator({ elevators })
  })
  describe(`knows the current state of all it's elevators`, () => {
    it('without any requests, knows all elevators are at ground level waiting', () => {
      assert.equal(operator.freeElevators.length, 4)
    })
  })
  describe.skip('#Loop', () => {

  })
})
