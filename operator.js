// OPERATOR CONCERNS
// 6. An elevator request can be made at any floor, to go to any other floor.
// 7. When an elevator request is made, the unoccupied elevator closest to it will answer the
// call, unless an occupied elevator is moving and will pass that floor on its way. The
// exception is that if an unoccupied elevator is already stopped at that floor, then it will
// always have the highest priority answering that call.

// needs an event loop of some sort
//   loop begins with floor requests?, maybe build up request queue?
//   divy out floor requests to any elevators
//   allow elevators to move
//   how do we find elevator closest to floor?
module.exports = class Operator {
  constructor({ elevators = [], floors = [], floorRequests = [] } = {}) {
    this.elevators = elevators
    this.floors = floors
    this.floorRequests = floorRequests
    // set floorRequestQueue to an empty array
    // set elevatorLocation array by creating arrary with x slots for every floor, and a slot an array indicating the current position of elevators.
  }
  start() {
    // creates interval via setInterval to call #progressLoop every 100ms
    // store interval
  }
  stop() {
    // gracefully shutdown elevators
    // clear interval for #progressLoop
  }
  queueFloorRequest(requestingFloor, targetFloor) {
    // queue the request with the target floor, store request in floorRequests to update the floor once the requested elevator arrives
  }
  // Private Methods
  _updateElevatorsStates() {
    // update the elevatorLocation datastructure to sort elevators by which floor they're on
    // process if any elevators need to be repaired, repair them if possible
  }
  _updateFloorsStates() {
    // communicate to floors that the elevator they requested has arrived and what direction each is going
    // also communicate to floors that elevators have departed
  }
  _processFloorRequestQueue() {
    // iterate over request queue
    //   per request find nearest elevator and what direction it is moving.
    //     if it is moving in the right direction, closest, and in order add to destination. If not check next closest, etc.
    //  for loop calling findClosestElevator
  }
  _findClosestElevator(floorNum, direction) {
    // uses modified binary search to find the closest elevator moving in the right direction to a floor, searching the elevatorLocation datastructure
  }
  _advanceElevators() {
    // iterate over elevators to allow them to door their work, move floors, open/close doors, etc.
  }
  _progressLoop() {
    this._updateElevatorsStates()
    this._updateFloorStates()
    this._processFloorRequestQueue()
    this._advanceElevators()
  }
}
