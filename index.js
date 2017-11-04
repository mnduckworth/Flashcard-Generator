var inquirer = require("inquirer");

var clozeCard = require("./ClozeCard.js");

var basicCard = require("./BasicCard.js");

var cards  = [];

firstChoice();

function firstChoice () {
	inquirer.prompt([
			{
				type: "list",
				choices: ["Create a card.", "View created cards."],
				message: "Do you want to view created cards or create a new one?",
				name: "firstChoice"
			}
		])
	.then(function(response){
		if (response.firstChoice == "Create a card.") {
			create();
		}
		else if (response.firstChoice == "View created cards.") {
			view();
		}
	})
}

function create () {
	inquirer.prompt([
			{
				type: "list",
				choices: ["Create a Basic Card", "Create a Cloze Card"],
				message: "What kind of card would you like to create?",
				name: "secondChoice"
			}
		])
	.then(function(response){
		if (response.secondChoice == "Create a Basic Card") {
			createBasicCard();
		}
		else if (response.secondChoice == "Create a Cloze Card") {
			createClozeCard();
		}
	})
}

function view () {
	console.log(cards);
	firstChoice();
}

function createBasicCard() {
	inquirer.prompt([
			{
				message: "What do you want the question to be?",
				name: "question",
				type: "input"
			},
			{
				message: "What do you want the answer to be?",
				name: "answer",
				type: "input"
			}
		])
	.then(function(response){
		var newCard =  new basicCard(response.question, response.answer);
		cards.push(newCard);
		firstChoice();
	})
}

function createClozeCard() {
	inquirer.prompt([
			{
				message: "What do you want the question to be?",
				name: "question",
				type: "input"
			},
			{
				message: "What part do you want to be hidden?",
				name: "cloze",
				type: "input"
			}
		])
	.then(function(response){
		var newCard =  new clozeCard(response.question, response.cloze);
		cards.push({partial: newCard.partial(), answer: newCard.cloze});
		firstChoice();
	})
}

