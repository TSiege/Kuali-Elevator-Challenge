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
  describe('#advance', () => {
    // it(`after selecting a floor the elevator and advance is called the elevator closes its doors`, () => {
    //   const elevator = new Elevator({})
    //   elevator.goToFloor(15)
    //   elevator.advance()
    //   assert.equal(elevator.doorsOpen, false)
    // })
    // it(`once it progresses to a floor it opens doors and registers one trip`, () => {
    //   const elevator = new Elevator({  })
    //   elevator.goToFloor(2)
    //   elevator.advance()
    //   assert.equal(elevator.doorsOpen, true)
    //   assert.equal(elevator.tripCount, 1)
    // })
    // it.only(`once it reaches a destination it returns to the first floor`, () => {
    //   const elevator = new Elevator({  })
    //   elevator.goToFloor(2)
    //   elevator.advance()
    //   elevator.advance()

    //   assert.equal(elevator.doorsOpen, true)
    //   assert.equal(elevator.tripCount, 2)
    //   assert.equal(elevator.currentFloor, 1)
    // })
  })
})
