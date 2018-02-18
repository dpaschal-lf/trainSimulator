
let simulator;
function initializeApp(){
	simulator = new TrainSimulator();
}

getRandomAmount(min, max){
	return Math.random() * (max-min) + min;
}

class TrainSimulator{
	constructor()
}