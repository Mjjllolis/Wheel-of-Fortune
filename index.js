var wordLetters     = ['F', 'O', 'X'];
var guessedLetters  = ['_', '_', '_'];
var reward = 0;

//Guess Letter
function guessLetter(letter) {
    var validGuess = false;
    var guessMore = false;
    //For loop, guessing the word
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
           validGuess = true;
        }
        if (guessedLetters[i] == '_') {
            guessMore = true;
        }
    }

    //If it's a vlid guess, enter
    if  (validGuess) {
        console.log('You have found a letter');
        var prize = getRandomInt(1, 10) * 100;
        reward = reward + prize;
        console.log('You have been rewarded: ' + prize + ", For a total of: " + reward);
        console.log(guessedLetters.join(''));

        if (!guessMore) {
            console.log("Congratulations, you have won: " + reward);
        } 

    //Invalid guess
    } else {
        console.log('Sorry, thats not right.');
        var prize = getRandomInt(1, 10) * 100;
        reward = reward - prize;
        if (reward < 0){
          reward = 0;
        }
        console.log('You have been deducted: ' + prize + ", For a total of: " + reward);
        console.log('You now have: ' + reward);
    }
}
//Prize math
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


guessLetter('F');
console.log("--------------------------------------------------------------------------------")
guessLetter('H');
console.log("--------------------------------------------------------------------------------")
guessLetter('O');
console.log("--------------------------------------------------------------------------------")
guessLetter('X');
console.log("--------------------------------------------------------------------------------")