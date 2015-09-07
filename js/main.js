function swap(groupID, viewNum) {
	var buttons = document.getElementById(groupID).getElementsByClassName("card-button");
	var cards = document.getElementById(groupID).getElementsByClassName("card-contents")[0].childNodes;
	var temp = [];
	for (var i = 0; i < cards.length; ++i) {
		if (cards[i].nodeType !== document.TEXT_NODE) temp.push(cards[i]);
	}
	cards = temp;
	console.log(groupID, viewNum, cards);
	for (var i = 0; i < cards.length; ++i) {
		buttons[i].className = "card-button" + ((i === viewNum) ? " card-button-on" : "");
		cards[i].style.display = ((i === viewNum) ? "block" : "none");
	}
}