 	var playerGuess 

	function Guessgame(guess, answer){ 
		this.guess = guess;
		this.answer = answer;
		this.difference = 0;
	  	this.findDifference = function(){
			if(this.answer != this.guess) {
				if(this.guess < this.answer){
				 	this.difference = this.answer - this.guess;
				} else {
					this.difference = this.guess - this.answer;
				}
			} else {
				this.difference = 0
			}
		}

	}



	/*playerGuess = prompt("According to Payscale.com, what percentage of Amazon's workforce is female?");
	Amazon = new Guessgame (playerGuess, 25 );
	Amazon.findDifference();
	if(Amazon.answer == Amazon.guess){
		alert("You're correct!")
	} else {
		alert("Nope. Off by: " + Amazon.difference);
	}

	playerGuess = prompt("What percentage of Google's global workforce is female?");
	Google = new Guessgame (playerGuess, 30 );
	Google.findDifference();
	if(Google.answer == Google.guess){
		alert("You're correct!")
	} else {
		alert("Sorry. Off by: " + Google.difference);
	}

	playerGuess = prompt("What percentage of Facebook's workforce is female?");
	Facebook = new Guessgame (playerGuess, -0 );
		alert("Sadly, I could not find good gender diversity data on Facebook, Twitter, Apple or Microsoft.")
*/	