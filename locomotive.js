

class Locomotive{
	constructor(){
		this.connectedBack; // the carriage the train is connected to at the rear
		this.conductor;  //the person driving the train
		this.moving; //wether the train is moving or not.  
	}
	addDriver(){
		//this function adds a conductor to the train, but they must be a conductor to enter the position
	}
	removeDriver(){
		//removes the conductor from the locomotive
	}
	move(){
		//causes the train to be in the moving state.  can only be made true if there is a conductor
		//calls the conductor's driveTrain method
	}
	stop(){
		//causes the train to be in the stopped state (not moving);
		//calls the conductor's stopTrain method
	}
}