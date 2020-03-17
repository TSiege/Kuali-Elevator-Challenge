// Feels like the simplest object.
//  knows how many floors in total, and it's floor
//  can only ask operator for floors that isn't self
//  maybe knows its requested another floor?

class Floor {
  get availableFloors() {
    return this.floors.filter(fl => this.floorNumber)
  }
  constructor({ floorNumber = 1, floors = [1] }) {
    this.floorNumber = floorNumber
    this.floors = floors
  }
}
