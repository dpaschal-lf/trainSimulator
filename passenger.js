
class Passenger extends Person{
	constructor(){
		this.vehicle;  //the vehicle this person is currently aboard
	}
	boardVehicle(){
		//takes in a vehicle and calls that vehicle's addPassenger method
	}
	leaveVehicle(){
		//attempts to leave a vehicle by calling it's removePassenger method.
		//if it was successful, then sets this.vehicle to null
	}

}