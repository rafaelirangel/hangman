let buttons = document.querySelectorAll('.btn-js')

//Get buttons and add event listener for click
let scoreBtn = document.querySelector('#scoreBtn')
scoreBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('teste')
})

let playBtn = document.getElementsByClassName('playBtn')
playBtn[0].addEventListener('click', function(e){
    e.preventDefault();
    console.log('rafa')
})

let ownChoiceBtn = document.querySelector('#ownChoiceBtn');
ownChoiceBtn.addEventListener('click', (e) => {
  e.preventDefault();
  playerInput.style.display = 'block';

});

let playerInput = document.querySelector('#playerInput');


let playAgainBtn = document.getElementsByClassName('playAgainBtn')
playAgainBtn[0].addEventListener('click', function(e){
    e.preventDefault();
    console.log('br')
})


//Create arrays to host datas
let secretWord =["brazil", "venezuela", "cuba", "japan", "china", "germany", "france", "italy", "spain", "argentina", "united states", "canada", "mexico", "colombia", "egypt", "iran", "india", "iraq", "israel", "greece", "nigeria", "australia", "sweden", "portugal", "equador", "peru", "dominican republic", "costa rica", "afghanistan", "albania", "andorra", "belgium", "cameroon", "chile", "indonesia", "jamaica", "maldives", "morocco"]
let keyboard = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numOfChances = 6
let gameScore =[]
let letterGuessed =[]
let wrongGuess =[]
let correctGuess =[]

let randomWord = function(){
    if(playBtn === true){
        
    }
}
//get a random word from secretWord and display blank spaces on the board
//get userInput and display blank spaces on the board
//check if letter guessed matches the letters in the word, if it does display the letter if it doesn't display part of the hangman body
//keep going until the player guesses the correct word or run out of guesses 
//clear player input
//play again