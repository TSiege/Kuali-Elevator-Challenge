// 1. Initialize the elevator simulation with the desired number of elevators, and the desired
// number of floors. Assume ground/min of 1.
// 6. An elevator request can be made at any floor, to go to any other floor.
// 7. When an elevator request is made, the unoccupied elevator closest to it will answer the
// call, unless an occupied elevator is moving and will pass that floor on its way. The
// exception is that if an unoccupied elevator is already stopped at that floor, then it will
// always have the highest priority answering that call.

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
export class Elevator {
  // getters
  get tripCount() {
    return this.tripCount
  }
  get maxFloor() {
    return this.maxFloor
  }
  get needsMaintenance() {
    return this.tripCount === this.maxFloor
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
    return this.floorsPassed
  }
  // setters
  set openDoors() {
    return this.doorsOpen = true
  }
  set closeDoors() {
    return this.doorsOpen = false
  }
  set pickDestination(destination) {
    this.floorDestinations.push(destination)
  }
  set passFloor() {
    this.floorsPassed += 1
  }
  constructor({
    floor = 1,
    tripCount = 0,
    maxFloor = 100,
    doorsOpen = false,
    floorDestinations = [],
    floorsPassedCount = 0
  }) {
    this.floor = floor
    this.tripCount = tripCount
    this.tripCount = tripCount
    this.maxFloor = maxFloor
    this.doorsOpen = doorsOpen
    this.floorDestinations = floorDestinations
    this.floorsPassedCount = floorsPassedCount
  }
}
