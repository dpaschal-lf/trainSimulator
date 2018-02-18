
class Passenger extends Person{
	constructor(name, money){
		super(name, money);
		this.vehicle;  //the vehicle this person is currently aboard
	}
	boardVehicle(vehicle){
		//takes in a vehicle and calls that vehicle's addPassenger method
		this.say("I have boarded a vehicle");
		this.vehicle = vehicle;

	}
	leaveVehicle(){
		//attempts to leave a vehicle by calling it's removePassenger method.
		//if it was successful, then sets this.vehicle to null

		this.say("I have left a vehicle");
		this.vehicle = null;
	}

}