
let simulator;
function initializeApp(){
	theLittleEngine = new Locomotive();
	driver = new Conductor('Joe da driver', getRandomAmount());
	theLittleEngine.addDriver(driver);
	theLittleEngine.move();
	setTimeout(function(){
		theLittleEngine.stop();
		carriage1 = new Carriage();
		theLittleEngine.addCarriage(carriage1);
		carriage2 = new Carriage();
		carriage1.addCarriage(carriage2);
		var passengerCount = Math.floor(Math.random()*50);
		for(var i=0; i<passengerCount; i++){
			var passenger = new Passenger(getRandomName(), getRandomAmount(0,100))
			carriage1.addPassenger(passenger);
		}

		theLittleEngine.move();
		setTimeout(function(){
			theLittleEngine.stop();
			theLittleEngine.removeAllPassengers();
		})
	},2000);
}

function getRandomAmount(min, max){
	return Math.random() * (max-min) + min;
}


function getRandomName(){
	return names[ (Math.random()*names.length)>>0 ].name
}
var names = [{"name":"Dalton"},{"name":"Jayme"},{"name":"Jamal"},{"name":"Jayme"},{"name":"Sloane"},{"name":"Xena"},{"name":"Lamar"},{"name":"Lee"},{"name":"Pascale"},{"name":"Whitney"},{"name":"Benjamin"},{"name":"Regan"},{"name":"Octavius"},{"name":"Victoria"},{"name":"Illiana"},{"name":"Imogene"},{"name":"Charlotte"},{"name":"Emerald"},{"name":"Jelani"},{"name":"Bertha"},{"name":"Jessamine"},{"name":"Sopoline"},{"name":"Nerea"},{"name":"Anjolie"},{"name":"Chancellor"},{"name":"Tyler"},{"name":"Joseph"},{"name":"Kato"},{"name":"Halla"},{"name":"Fatima"},{"name":"Paul"},{"name":"Frances"},{"name":"Thor"},{"name":"Cassandra"},{"name":"Keegan"},{"name":"Blythe"},{"name":"Blaze"},{"name":"Blossom"},{"name":"Arsenio"},{"name":"Axel"},{"name":"Ava"},{"name":"Glenna"},{"name":"Solomon"},{"name":"Mannix"},{"name":"Armando"},{"name":"Hamish"},{"name":"Samson"},{"name":"Buckminster"},{"name":"Jordan"},{"name":"Zeph"},{"name":"Fletcher"},{"name":"Camille"},{"name":"Fredericka"},{"name":"Emery"},{"name":"Palmer"},{"name":"Cruz"},{"name":"Andrew"},{"name":"Perry"},{"name":"Erasmus"},{"name":"Anthony"},{"name":"Micah"},{"name":"Henry"},{"name":"Chastity"},{"name":"Molly"},{"name":"Yen"},{"name":"Kendall"},{"name":"Malachi"},{"name":"Kamal"},{"name":"Dacey"},{"name":"Cade"},{"name":"Demetria"},{"name":"MacKensie"},{"name":"Roth"},{"name":"Genevieve"},{"name":"Olivia"},{"name":"Nolan"},{"name":"Calvin"},{"name":"Neville"},{"name":"Colette"},{"name":"Norman"},{"name":"Lee"},{"name":"Zoe"},{"name":"Robin"},{"name":"Anjolie"},{"name":"Nathan"},{"name":"Ann"},{"name":"Basia"},{"name":"Angelica"},{"name":"Elliott"},{"name":"Imani"},{"name":"Clinton"},{"name":"Beverly"},{"name":"Brittany"},{"name":"Andrew"},{"name":"Remedios"},{"name":"Lila"},{"name":"Joel"},{"name":"Zephania"},{"name":"Ulla"},{"name":"Steel"}];


