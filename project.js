
//Get buttons and add click event
let scoreBtn = document.querySelector('#scoreBtn');
// scoreBtn.addEventListener('click', function(e){
//     e.preventDefault();
// })

//Choose a random word if the player click 'Play' btn
let playBtn = document.querySelector('#playBtn')
playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    randWord()
})

//Display input field after the player click on 'Enter your own' btn
let ownChoiceBtn = document.querySelector('#ownChoiceBtn');
ownChoiceBtn.addEventListener('click', (e) => {
  e.preventDefault();
  playerInput.style.display = 'block';
});

//Get Player input and add it to an arr
let playerInput = document.querySelector('#playerInput');
playerInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        ownWord.push(playerInput.value);
        console.log(ownWord);
    }
})

//Restart the game if the player click on 'Play again' btn
let playAgainBtn = document.querySelector('#playAgainBtn');
playAgainBtn.addEventListener('click', function(e){
    e.preventDefault();
    playAgain() //add func later
})

//Add selected letters to an arr and disable option of enter the same letter again, change background color of the selected letters.
let keyboard = document.querySelectorAll('.keyboardBtn');
keyboard.forEach(keyboardBtn => {
    keyboardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    letterGuessed.push(keyboardBtn.innerText)
    keyboardBtn.style.backgroundColor= 'lightBlue';
    keyboardBtn.style.color= 'black';
    keyboardBtn.disabled = true;
    console.log(letterGuessed)
    })
})

let hint = document.querySelector('.hint');

//Create arrays to host datas
let secretWord =["brazil", "venezuela", "cuba", "japan", "china", "germany", "france", "italy", "spain", "argentina", "united states", "canada", "mexico", "colombia", "egypt", "iran", "india", "iraq", "israel", "greece", "nigeria", "australia", "sweden", "portugal", "equador", "peru", "dominican republic", "costa rica", "afghanistan", "albania", "andorra", "belgium", "cameroon", "chile", "indonesia", "jamaica", "maldives", "morocco"]
// let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numOfChances = 6
let gameScore =[]
let randomWord =[]
let ownWord = []
let letterGuessed =[]
let wrongGuess =[]
let correctGuess =[]
let displayWord =[]

//Get a random word from the secretWord arr
let randWord = function(){
      let word = secretWord[Math.floor(Math.random() * secretWord.length)];
    //   document.getElementById("randomWord").textContent = word;
      randomWord.push(word)
      hint.innerHTML = "Here is a hint: Name of a country! "
      console.log(word)
      console.log(randomWord)
    }


    



//get a random word from secretWord and display it on screen, replace letters for blank spaces on the board
//get userInput and display word on screen, replace letters for blank spaces on the board
//display wrong char if user enter invalid char
//clear the input field
//check if letter guessed matches the letters in the word, if it does display the letter if it doesn't display part of the hangman body
//keep going until the player guesses the correct word or run out of guesses 
//clear player input
//play again