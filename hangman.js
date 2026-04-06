const POSSIBLE_WORDS = [
    "obdurate",
    "verisimilitude",
    "defenestrate",
    "obsequious",
    "dissonant",
    "toad"
];

const MAX_GUESSES = 6;

let word = "";
let guesses = "";
let guessCount = MAX_GUESSES;
let gameOver = false;

let newGame = function () {
    guessCount = MAX_GUESSES;
    guesses = "";
    gameOver = false;
    
    let randomIndex = Math.floor(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();
};

let updatePage = function () {
    let clueString = "";

    for (let i = 0; i < word.length; i++) {
        let currentLetter = word.charAt(i);

        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        } else {
            clueString += "_ ";
        }
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: " + guesses;

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;

    if (word === "") {
        
    } else if (Win()) {
        guessArea.textContent = "Guesses: " + guesses + " You win";
    } else if (Lose()) {
        guessArea.textContent = "Guesses: " + guesses + " You lose";
    } else {
        guessArea.textContent = "Guesses: " + guesses;
    }
}

let Win = function () {
    if (word === "") {
        return false;
    }

    for (let i = 0; i < word.length; i++){
     let currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) < 0) {
            return false;   
    }
}
    return true;
}

let Lose = function () {
    return guessCount <= 0;
}

let guessLetter = function () {
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();

    input.value = "";

    if (word === "") {
        return;
    }


    if (gameOver){
        return;
    }

    if (guesses.indexOf(letter) >= 0) {
        document.getElementById("guesses").textContent =
            "Guesses: " + guesses;
        return;
    }

    if (word.indexOf(letter) < 0) {
        guessCount--;
    }

    guesses += letter;
    input.value = "";

     if (Win() || Lose()) {
        gameOver = true;
    }

    updatePage();
}