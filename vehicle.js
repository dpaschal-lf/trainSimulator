

class Vehicle{
	constructor(){
		this.connectedBack; // the carriage the train is connected to at the rear
		this.connectedFront; //the locomotive or carriage this carriage is connected to at the front
		this.costToEnter = 0;
	}
	addDriver(person){
		//this function adds a conductor to the train, but they must be a conductor to enter the position
		if(this.hasOwnProperty('driver') &&person.constructor===Conductor){
			this.driver = person;
			return true;
		}
		return false;
	}
	removeDriver(){
		//removes the conductor from the locomotive
		if(this.driver){
			this.driver = null;
			return true;
		}
		return false;
	}
	addCarriage(vehicle){
		//add a carriage to the rear of this one
		if(this.connectedBack){
			console.error('already have a rear connection');
		}
		if(vehicle.constructor === Carriage){
			this.connectedBack = vehicle;
			vehicle.connectTo(this);
			console.log('added a carriage');
			return true;
		} else {
			console.error('can only add a carriage');
			return false;
		}
	}
	connectTo(vehicle){
		//connect this carriage to a locomotive or a carriage
		this.connectedFront = vehicle;
	}
	findLocomotive(vehicle=this.connectedFront){
		if(vehicle.constructor === Locomotive){
			return vehicle;
		} else {
			return vehicle.findLocomotive();
		}
	}
	addPassenger(passenger){
		//add a person to the carriage's passenger manifest or pass the passenger to the next car, if any
		//can only do so if the train is not moving	
		if(passenger.constructor !== Passenger){
			return false;
		}
		var locomotive = this.findLocomotive();
		if(!locomotive.moving){
			if(this.passengers.length < this.maxPassengers){
				this.passengers.push(passenger);
				passenger.boardVehicle(this);
				return this; //they boarded this car, add here
			} else if(this.connectedBack){
				//if this car is full, but there is a car to our rear, try to add there
				return this.connectedBack.addPassenger(passenger);
			} else {
				return false; //no rearward cars to add to
			}
		} else {
			return false; //train is moving, cannot add
		}
	}
	removeAllPassengers(){

		if(this.passengers){
			this.passengers.forEach(guest=>{
				this.removePassenger(guest);
			});
		}
		if(this.connectedBack){
			this.connectedBack.removeAllPassengers();
		}
	}
	removePassenger(passenger){
		var locomotive = this.findLocomotive();
		if(locomotive.moving){
			return false;
		}
		var passengerIndex = this.passengers.indexOf(passenger);
		if(passengerIndex){
			this.passengers[passengerIndex].leaveVehicle();
			this.passengers.splice(passengerIndex, 1);
			return true;
		} else {
			return false;
		}
		//remove a passenger from the carriage.  Can only happen when train is stopped
		//if successful, returns true.  if unsuccessful (for example the passenger isn't in the carriage or the train is moving, return false)
	}
}