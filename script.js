function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function roundCost(average){
	average *= 100;
	average = Math.round(average);
	average /= 100;
	return average;
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
	cash: 100
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
		cost = roundCost(cost);
		if (user.cash > cost){
			user.banana[0]++;
			user.banana[2]++;
			user.banana[1]+= cost;
			user.cash -= cost;
			var average = (user.banana[1]/user.banana[0]);
			average = roundCost(average);
			$("#numBananas").text("Bananas: " + user.banana[0]);
			$("#avgBananas").text("Avg. Purchase Price: $" + average);
			$("#userPurchases").text("Dollars Remaining: $" + user.cash);
		} else{
			alert("Please look for something cheaper!");
		}		
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
		$("#numApples").text("Apples: " + user.apple[0]);

	});


	$("#orangeButton").on("click", function() {
		var cost = fruitArray[1].price;
			cost = roundCost(cost);
		if (user.cash > cost){
		user.orange[0]++;
		user.orange[2]++;
		user.orange[1]+= cost;
		user.cash -= cost;
		var average = (user.orange[1]/user.orange[0]);
			average = roundCost(average);
		$("#numOranges").text("Oranges: " + user.orange[0]);
		$("#avgOranges").text("Avg. Purchase Price: $" + average);
		$("#userPurchases").text("Dollars Remaining: $" + user.cash);
		} else{
			alert("Please look for something cheaper!");
		}		

	});


	$("#pearButton").on("click", function() {
		var cost = fruitArray[3].price;
		user.pear[0]++;
		user.pear[2]++;
		user.pear[1]+= cost;
		user.cash -= cost;
		$("#numPears").text("Pears: " + user.pear[0]);

	});
	});