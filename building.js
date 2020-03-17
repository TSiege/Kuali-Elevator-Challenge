// BUILDING CONCERNS
// 1. Initialize the elevator simulation with the desired number of elevators, and the desired
// number of floors. Assume ground/min of 1.

// What objects should their be?
// elevators, yes
// elevator operator? probs
// floors? not sure how else to call the operator or elevator?
// building? does a building have them all?
// building has floors, elevators, and elevator operator
// building could instantiate them all
//   building knows how many floors and elevators
// floors could call operator,
// operator sends elevator to floor,
// elevator goes to floor
// needs an event loop of some sort
module.exports = class Building {
  constructor ({ elevatorCount = 4, floors = 20 } = {}) {
    // create all the elevators and floors
    // create operator and give operator all the elevator and floor instances
    // starts elevator system
  }
}
