var cards = [
{rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png',
},

{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png',
},

{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png',
},

{ 
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png',
}

];

// Array with the cards currently being played 
var cardsInPlay = [];
// Store the times the user wins
var score = 0;

var checkForMatch = function () {
		if ( cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			// updating score
			score += 1;
			// show the score in console.log
			console.log(score);
		} else {
			alert("Sorry, try again.");
			console.log(score);
		}
};


var flipCard = function () {
	// Get the data-id of the card that was just clicked
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	// Display the card's image that was just clicked 
	this.setAttribute('src', cards[cardId].cardImage);

	// If the length of cardsInPlay equals 2 then call the checkForMatch function
	if (cardsInPlay.length === 2){
	checkForMatch();
	// After calling the function, empty cards in cardsInPlay array
	cardsInPlay = [];
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++ ) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		// data- attributes are meant to store data about an element that is not tied to a style 
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};


createBoard();



