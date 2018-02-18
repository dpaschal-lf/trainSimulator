

class Locomotive extends Vehicle{
	constructor(){
		super();
		this.driver = null;
		this.conductor;  //the person driving the train
		this.moving; //wether the train is moving or not.
		this.smokeTimer = null;
		this.scheduleNextPuff(100,3000);
	}
	puff(){
		console.log('puff puff');
	}
	toot(){
		console.log('toooooot');
	}
	removAllPAssengers(){
		
	}
	scheduleNextPuff(minTime, maxTime){
		this.deschedulePuff();

		this.smokeTimer = setTimeout((function(){
			if(this.moving){
				if(Math.random() < .8){
					this.puff();
				} else {
					this.toot();
				}
			}
			this.scheduleNextPuff(minTime, maxTime);
		}).bind(this), getRandomAmount(minTime, maxTime));
	}
	deschedulePuff(){
		if(this.smokeTimer){
			clearTimeout(this.smokeTimer);
		}
	}
	move(){
		//causes the train to be in the moving state.  can only be made true if there is a conductor
		//calls the conductor's driveTrain method
		if(this.driver){
			this.moving = true;
			this.driver.drive();
		}
	}
	stop(){
		//causes the train to be in the stopped state (not moving);
		//calls the conductor's stopTrain method
		this.moving = false;
		this.driver.stop();
	}

}