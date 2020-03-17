# Elevator Design Plans
In order to design my system, I decided to build the elevator challenge around modern elevators. Imagine a building, it has a bank elevators. On each floor is an LCD that displays all the available floors to travel to from a given floor. A user on a floor would click on the LCD where it wants to go. This LCD represents the Operator Class. It is the direct point of contact between floors and elevators. Once the elevator arrives, all a user has to do is enter it. The doors close and the elevator is off. My basic thinking is let the Operator worry about coordinating and optimizing requests and let the Elevators focus on moving people between floors.

## Four Sets of Objects

### Building
A Building is essentially some sort of [Factory Pattern](https://sourcemaking.com/design_patterns/abstract_factory). It's initialization can be thought of as a blue print. You give it the number of floors and elevators and it creates those objects. It also creates one Operator, and passes to it the elevators and floors that it needs to communicate with. It's a simple class, and is kept as a class since you might want to have multiple buildings.

### Floor
A Floor, like the Building class, is simple and doesn't need to keep track of much state. It's only aware of itself, the total number of floors, the Operator, and whether or not an elevator has arrived and what direction it will be moving in. It needs this information to send requests to the Operator about which floor it would like to go to, and what direction the elevator should be travelling to, itself. It will need to be alerted that an elevator has arrived, along with the direction of the elevator.

### Elevator
An Elevator is a fairly complex object, but isn't modelled of a researched pattern. It's complexity is solely derived from managing its own state. Elevators are unaware of the number of other elevators.
Such as:
- Where in the building is it?
- Are its doors open?
- Has it reached a destination?
- Should it be moving up or down?
- How many trips has it made and does it need servicing?
- How many floors has it passed?
- Estimator of whether or not it is able to make a trip to a floor (current servicing status and direction of travel)

### Operator
An Operator is based of off the [Mediator Pattern](https://sourcemaking.com/design_patterns/mediator). It is designed to receive requests from floors, track the location of elevators and use some sort of algorithm to optimize on lifespan of elevators and time to ferry users between floors. Floors will send it requests and will be alerted if an elevator has arrived, elevators will update it on their state and location and receive requests for floors. To perform these functions the Operator needs to have some sort of event queue. An event loop was decided to allow user interactions and not clog the call stack with a continuous loop. It might work in the following way.

Step 1. Iterate over elevators and find out all of their states and alert any floors what elevators have arrived and their direction.
Step 2. Process requests queue from Floors.
Step 3. Update elevators with requested destinations.
Step 4. Allow elevators to advance floors and let them figure out their current state.
Step 5. Jump to step 1.

This pattern was chosen to give the push complexity of elevators deciding a consensus on who should be going to what floors out of that model and into an Operator. This way there is one central location deciding who does what rather then doing some sort of quorum. In addition this decouples elevators and floors, and even decoupling elevators and floors from themselves. This means elevators do not need to be aware of how many other elevators exist, and the same for floors. The overall exposed API of this system would be low, and would allow features to be added with few updates between classes.

The trade off is that the operator would have complex logic to decide what elevator does what, and would have to ferry messages between the correct elevator and the correct floor. This complexity could be a challenge in updating it down the line. However, I believe these challenges are worth the effort given the minimal shared logic.

## Further Questions
The following are design questions I've had that were not answered by the specs or raised by myself that I have yet to decide:
- What constitutes a trip? Does every time it reaches a destination?
  - Does it include going from the ground floor from a destination?
  - How many trips is it to go the fl 4 and stops at floor 2 to pick another person up who also wants to go to 4?
    - 1? 2? 3?
  - My assumption is that whenever an elevator goes from one floor and stops at another it is one trip so the above would be 3 trips in total
- If an elevator reaches 100 trips before it finishes does it get stuck on that floor or does it return 1?
- How long does it take to service an elevator?
- Do elevators have a max capacity?
- Would we want multiple operators for a building to represent multiple elevator banks?

## External Resources Used
- https://sourcemaking.com/design_patterns/mediator
- https://sourcemaking.com/design_patterns/chain_of_responsibility
- https://sourcemaking.com/design_patterns/abstract_factory
- https://sourcemaking.com/design_patterns
- Various pages from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

## Inspiration
[Elevator Operator, by Courtney Barnett](https://www.youtube.com/watch?v=9kuqVySGjL0)
