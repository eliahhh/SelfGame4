var database, form, User, personCount;
var poepleCount = 0;

function setup() {
	createCanvas(1500,1000);
	
	database = firebase.database();
	form = new Form();
	form.display();
	User = new User1();
	User.getCount();

}


function draw() {
  
  background("lightgreen");
  
}

