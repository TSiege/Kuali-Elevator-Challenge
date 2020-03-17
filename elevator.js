// ELEVATOR CONCERNS
// 2. Each elevator will report as is moves from floor to floor.
// 3. Each elevator will report when it opens or closes its doors.
// 4. An elevator cannot proceed above the top floor.
// 5. An elevator cannot proceed below the ground floor (assume 1 as the min)
// 8. The elevator should keep track of how many trips it has made, and how many floors it
// has passed. The elevator should go into maintenance mode after 100 trips, and stop
// functioning until serviced, therefore not be available for elevator calls.

// Questions
// How does a user interact with the elevator?
//   does a user request up down then in elevator as to go to floor?
//   or is there all floors listed on each floor to go to??
// how does the elevator move?
//   does an elevator go directly to floor?
//   should it go directly to a floor?
// destinations should be array of floor numbers not one
// must remove desintation once it arrives at floor
// needs to know direction
const UP = 'up'
const DOWN = 'down'

module.exports = class Elevator {
  get needsMaintenance() {
    return this.tripCount === 100
  }
  get areDoorsOpen() {
    return this.doorsOpen
  }
  get currentFloor() {
    return this.floor
  }
  get destinations() {
    return this.floorDestinations
  }
  get floorsPassed() {
    return this.floorsPassedCount
  }
  get currentDirectionn() {
    return this.direction
  }
  // setters
  openDoors() {
    return this.doorsOpen = true
  }
  closeDoors() {
    return this.doorsOpen = false
  }
  constructor({
    floor = 1,
    tripCount = 0,
    maxFloor = 100,
    doorsOpen = false,
    floorDestinations = [],
    floorsPassedCount = 0,
    direction = null
  } = {}) {
    this.floor = floor
    this.tripCount = tripCount
    this.maxFloor = maxFloor
    this.doorsOpen = doorsOpen
    this.floorDestinations = floorDestinations
    this.floorsPassedCount = floorsPassedCount
    this.direction = direction
  }
  goToFloor(destination) {
    // needs catch for top floor and min floor
    this.floorDestinations.push(destination)
    if (this.currentFloor === 1) {
      this.openDoors()
    }
    if (!this.direction) {
      this.direction = this.currentFloor < destination ? UP : DOWN
    }
  }
  advance() {
    if (this.areDoorsOpen) {
      this.closeDoors()
    }
    if (this.destinations.length) {
      this._passFloor()
      if (this.destinations.includes(this.currentFloor)) {
        this._reachedFloor()
      }
    }
  }
  repair() {
    // set tripCount to zero
  }
  // private methods
  _reachedFloor() {
    this.openDoors()
    this.floorDestinations = this.floorDestinations.filter(fl => fl !== this.currentFloor)
    this.tripCount += 1
    if (!this.destinations.length) {
      this.direction = null
      if (this.currentFloor !== 1) {
        this.goToFloor(1)
      }
    }
  }
  _passFloor() {
    this.floor += this.direction === UP ? 1 : -1
    this.floorsPassedCount += 1
    if (this.floor === 1) {
      this.direction = UP
    } else if (this.floor === this.maxFloor) {
      this.direction = DOWN
    }
  }
}
