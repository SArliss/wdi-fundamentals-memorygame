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

const cardsInPlay = [];

function checkForMatch (){
	 
	if (cardsInPlay.length >= 2){
		if ( cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.")
		}
	}
};


function flipCard (){
	var cardId = this.getAttribute('data-id');
	// getAttribute method to get the data-id attribute of 
	// the card that was just clicked and store it in a 
	// variable cardId.
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	// use the setAttribute method to update the src attribute 
	// to the image of the card that was just clicked (the image
	// source is in the cardImage property in that card's object 
	// in the cards array).
	checkForMatch();
};

function createBoard (){
	for (var i = 0; i < cards.length; i++ ) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		// data- attributes are meant to store data about an 
		// element that is not tied to a style. 
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};


createBoard();



