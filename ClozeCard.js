function ClozeCard (text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function(){
		return text.replace(cloze, "...");
	};
	this.check = function(){
		if(!text.includes(cloze)){
			console.log("Sorry the text doesn't containt the cloze statement.");
		}
	}
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.partial());

var brokenCloze = new ClozeCard("This doesn't work", "oops");

brokenCloze.check();

module.exports = ClozeCard;