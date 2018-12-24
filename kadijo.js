<script type="text/javascript">
		
var dogs = {
  // creates the property "raining" and sets it to true
  raining: true,
  // creates the property "noise" and sets it to "Woof!"
  noise: "Woof!",
  // creates the method "makeNoise", which when called, prints dogs.noise if .raining is true
  makeNoise: function() {
  // the 'this' keyword refers to the object it's called from
  // i.e. this.raining refers to the raining property of 'this' particular object
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
};


var dogs = {
	 raining: false,
	 noise: "woof",
	 makeNoise: function(){
	 	if(this.raining === false){
	 		console.log(this.noise)
	 	}
	 }

};


function Person(name, age, country,personInformation){
	this.name = name; 
    this.age = age;
    this.country = country;
	this.personInformation = function(){
		console.log("Name: " + this.name + "\nAge: " + this.age + "\nCountry: " + this.country);
    }

}


var Kadiro = new Person ("Elemo", 44, "Oromia", "Millammian");
var Talile = new Person ("Dhaba", 34, "Wallaga", "Muggian");
var Bidire = new Person ("Sharif", 32, "Bale", "Balian");
var Amane = new Person("Ayuba", 45, "Robe", "Robean");
var Garricho = new Person("Bati", 28, "Qoriole", "Raituian");
var Raya = new Person("Rayan", 38, "Hadaba", "Rayumma")
var Konso = new Person("Konsole", 89, "Argamayda", "Konsummaa");

Kadiro.personInformation(); 
Talile.personInformation(); 
Bidire.personInformation(); 
Amane.personInformation(); 
Garricho.personInformation();
Raya.personInformation();
Konso.personInformation();

// Conditional statements
var weather = function(currentTemp) {
	if(currentTemp >= 90 && currentTemp < 110) {
		return "Hot"
    } else if(currentTemp > 72 && currentTemp < 90) {
		return 'It is normal weather: Sunny and enjoyable weather';
    } else if(currentTemp > 32 && currentTemp < 72) {
		return 'Cold';
    } else if (currentTemp <= 32) {
		return "Freezing";
    } else {
		return "The weather is unpredictable."
    }
}
console.log(weather(90)); // returns hot
console.log(weather(73)); // returns Sunny and enjoyable
console.log(weather(60));// returns cold
console.log(weather(32)); // returns freezing
console.log(weather(23));// returns freezing
console.log(weather(98));// returns hot
console.log(weather(78)); //returns sunny and enjoyable


	</script>