function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function Fruit (name) {
	this.name = name;
	this.price = randomNumber(50, 999)/100;
}

Fruit.prototype.changePrice = function () {
	this.price += randomNumber(-50, 50) / 100;
	this.price = Math.round(100*this.price)/100;
	if (this.price > 9.99) {
		this.price = 9.99;
	} else if (this.price < 0.50) {
		this.price = 0.50;
	}
}

var apples = new Fruit ("apples");
var oranges = new Fruit ("oranges");
var bananas = new Fruit ("bananas");
var grapes = new Fruit ("grapes");
var pears = new Fruit ("pears");

var fruitArray = [apples, oranges, bananas, pears];

console.log(fruitArray);

var userApple = [0, 0, 0];
var userBanana = [0, 0, 0];
var userOrange = [0, 0, 0];
var userPear = [0, 0, 0];
var user = {
	apple: userApple,
	banana: userBanana,
	orange: userOrange,
	//grape: userGrape,
	pear: userPear,
	cash: 0
};

$(document).ready(function(){
	$("#bananasPrice").text(bananas.price);
	$("#applesPrice").text(apples.price);
	$("#pearsPrice").text(pears.price);
	$("#orangesPrice").text(oranges.price);
	setInterval(function (){
		for(var i = 0; i <fruitArray.length; i++){
				fruitArray[i].changePrice();

				$("#"+fruitArray[i].name+"Price").text(fruitArray[i].price);
				//console.log("The price for " + fruitArray[i].name + " is " + fruitArray[i].price);
			}
		}, 5000);



	$("#bananaButton").on("click", function() {
		var cost = fruitArray[2].price;
		user.banana[0]++;
		user.banana[2]++;
		user.banana[1]+= cost;
		user.cash -= cost;

	});


	/*$("#grapeButton").on("click", function() {
		var cost = fruitArray[3].price;
		user.grape[0]++;
		user.grape[2]++;
		user.grape[1]+= cost;
		user.cash -= cost;

	});*/


	$("#appleButton").on("click", function() {
		var cost = fruitArray[0].price;
		user.apple[0]++;
		user.apple[2]++;
		user.apple[1]+= cost;
		user.cash -= cost;
		console.log("I worked");

	});


	$("#orangeButton").on("click", function() {
		var cost = fruitArray[1].price;
		user.orange[0]++;
		user.orange[2]++;
		user.orange[1]+= cost;
		user.cash -= cost;

	});


	$("#pearButton").on("click", function() {
		var cost = fruitArray[3].price;
		user.pear[0]++;
		user.pear[2]++;
		user.pear[1]+= cost;
		user.cash -= cost;

	});
	});