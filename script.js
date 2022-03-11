var dictionary = [];

function addWord() {
  var input = document.getElementById('word').value;
	var showMessage = document.getElementById('statusInput');

  if (dictionary.includes(input)) {
  	showMessage.innerHTML = "This word already exists";
  } else {
  	var newWord = dictionary.push(input);
    showMessage.innerHTML = "Added in the dictionary :)";
  }
}

function searchWord() {
	var input = document.getElementById('word').value;
  var showMessage = document.getElementById('statusInput');
  if (dictionary.includes(input)) {
  	showMessage.colour = "red";
  	showMessage.innerHTML = "This word already exists";
  } else {
  	showMessage.innerHTML = "You can add this word in the dictionary. Simply click on the button Add word :)";
  }
}
