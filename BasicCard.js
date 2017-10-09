function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}
var firstPresident = new BasicCard("Who was the fist president?", "George Washington");

module.exports = BasicCard;