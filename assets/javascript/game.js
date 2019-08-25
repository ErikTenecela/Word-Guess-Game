


var answers = ["goku", "naruto", "peter", "Iron-man"]


var keys = "";
var letters = []
var empty = 0;
var emptyAndAnswer = [];
var wrongAnswer = [];


var correct = 0;
var wrong = 0;
var guessRemaining = 9;



function Game() {
    keys = answers[Math.floor(Math.random() * answers.length)];

    letters = keys.split("");

    empty = letters.length;

    for (var i = 0; i < empty; i++) {
        emptyAndAnswer.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + emptyAndAnswer.join("  ");

    console.log(keys);
    console.log(letters)
    console.log(empty)
    console.log(emptyAndAnswer)
}



var sayian = document.getElementById("goku");
var ninja = document.getElementById("naruto");
var bird = document.getElementById("peter");
var iron = document.getElementById("Iron-man");



function audio () {
    if (answers === [0]) { 
    ninja.paused();
    bird.paused();
    iron.paused();
    sayian.play();
    document.getElementById("Photo").src = "assets/images/tenor.gif";
    }
else if (answers === [1]) {
    bird.paused();
    iron.paused();
    sayian.paused();
    ninja.play();
    document.getElementById("Photo").src = "assets/images/AgonizingUntriedJellyfish-max-1mb.gif";
} 
else if (answers === [2]) {
    iron.paused();
    sayian.paused();
    ninja.paused();
    bird.play();
    document.getElementById("Photo").src = "assets/images/giphy.gif";
}
else if (answers === [3]) {
    sayian.paused();
    ninja.paused();
    bird.paused();
    iron.play();
    document.getElementById("Photo").src = "assets/images/tumblr_0375dcf424160804918d1a3fdceee3b3_cc0cc57e_400.gif";
}

};

function reset() {
    guessRemaining = 9;
    wrongAnswer = [];
    emptyAndAnswer = [];
    Game()
}


function checkLetters(letter) {
    var letters = false;
    
    for (var i = 0; i < empty; i++) {
        if (keys[i] == letter) {
            letters = true;
        }
    }

    if (letters) {
        
        for (var i = 0; i < empty; i++) {
            if (keys[i] == letter) {
                emptyAndAnswer[i] = letter;
            }
        }
    }
    
    else {
        wrongAnswer.push(letter);
        guessRemaining--;
    }
    console.log(emptyAndAnswer);
}


function complete() {
    console.log("correct:" + correct + "| wrong" + wrong + "| guesses left:" + guessRemaining)

    
    if (letters.toString() == emptyAndAnswer.toString()) {
        correct++;
        audio()
        reset()
        
        document.getElementById("wining").innerHTML = " " + correct;

        
    } else if (guessRemaining === 0) {
        wrong++;
        reset()
        document.getElementById("photo").src = "./assets/images/try-again.png"
        document.getElementById("lossing").innerHTML = " " + wrong;
    }
    
    document.getElementById("currentword").innerHTML = "  " + emptyAndAnswer.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessRemaining;
}



Game()


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    
    checkLetters(guesses);
    
    complete();
    
    console.log(guesses);

    
    document.getElementById("playerguesses").innerHTML = "  " + wrongAnswer.join(" ");
}
