// Feels like the simplest object.
//  knows how many floors in total, and it's floor
//  can only ask operator for floors that isn't self
//  maybe knows its requested another floor?

module.exports = class Floor {
  get availableFloors() {
    return this.floors.filter(fl => this.floorNumber)
  }
  constructor({ floorNumber = 1, floors = [1], operator, dockedElevators = [] } = {}) {
    this.floorNumber = floorNumber
    this.floors = floors
    this.operator = operator
    this.dockedElevators = dockedElevators
  }
  requestFloor(number) {
    // send message to operator about desired floor
  }
  arrivedElevators(elevators = []) {
    // set dockedElevators
    // clear old display information
    // display information about direction and destination of arrived elevators
  }
  _displayArrivedElevators() {
    // alert the user somehow
  }
}
