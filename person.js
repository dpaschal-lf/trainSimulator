

class Person{
	constructor(name, money){
		this.name=name;  //the name of the person
		this.money=money; //a random amount between 0 and 100 dollars
	}
	spendMoney(amount){
		//takes in an amount of money and returns the amount deducted from the person's money
		if(amount>this.money){
			return false;
		}
		return true;
	}
	addMoney(amount){
		//adds money to the person's money
		this.money+=amount;
	}
	say(message){
		//takes in a a message and logs it out to the console.  Always starts with the person's name.
		//for example: 'Jack says: <some message>'
		console.log(this.name + ' says: '+message);
	}
}