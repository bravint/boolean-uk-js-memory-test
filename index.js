//CHALLENGE 2 COMPLETED

let num = 0;
let rng = 0;
let numberArr = [];
let guessArr = [];
let guess = 0;
let errorCounter = 0;

function playMemoryTest(num) {
    
    for (let i = 0; i < num; i++) {
    rng = Math.floor(Math.random() * (100 - 1) + 1);
    numberArr.push(rng);
    }
    console.log(numberArr);
    
    alert(`remember this sequence of numbers ${numberArr}`);

    setTimeout(startGuess, 15000);

    function startGuess () {

        for (let i = 1; i <= num; i++) {
            guess = Number(prompt(`enter number ${i}`));
            guessArr.push(guess);
        }    
        console.log(guessArr);
        for (let i = 0; i <= num; i++) {
            if (numberArr[i] !== guessArr[i]) {
                errorCounter++;
            }
        }
        if (errorCounter === 1) {
            console.log(`You are useless at this smh, you got ${errorCounter} number wrong`);
        } else if (errorCounter > 1) {
            console.log(`You are useless at this smh, you got ${errorCounter} numbers wrong`);
        } else {
            console.log(`YAY! You did a thing!!!`);
        }
    }
}

let numberGuesses = Number(prompt(`how many numbers would you like to try and remember`));
playMemoryTest(numberGuesses); 