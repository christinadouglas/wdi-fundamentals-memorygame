const cards = ["queen", "king", "queen", "king"];
const cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay === 2) {
	alert("You found a match!");
} else { 
	alert("Sorry. Try again.")
}