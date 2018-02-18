

class Carriage{
	constructor(){
		this.connectedFront; //the locomotive or carriage this carriage is connected to at the front
		this.connectedBack; //the carriage this is connected to at the back
		this.maxPassengers = 12;
		this.passengers; //list of passengers in the car
	}
	addCarriage(){
		//add a carriage to the rear of this one
	}
	connectTo(){
		//connect this carriage to a locomotive or a carriage
	}
	addPassenger(){
		//add a person to the carriage's passenger manifest or pass the passenger to the next car, if any
		//can only do so if the train is not moving
	}
	removePassenger(){
		//remove a passenger from the carriage.  Can only happen when train is stopped
		//if successful, returns true.  if unsuccessful (for example the passenger isn't in the carriage or the train is moving, return false)
	}
}