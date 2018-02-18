

class Conductor extends Person{
	constructor(name, money){
		super(name, money);
	}
	drive(){
		//utilizes the person's say method, says "choo choo! <person's name> is driving the train!";
		this.say("choo choo!" + this.name + " is driving the train!");
		//eg in the console: 'Johnny says: choo choo!  Johnny is driving the train!'
	}
	stop(){
		//utilizes the person's say method, says "coming to a stop!"
		this.say("coming to a stop!");
	}
}