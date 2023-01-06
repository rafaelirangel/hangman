//Get buttons and add click event

let scoreBtn = document.querySelector('#scoreBtn');
scoreBtn.addEventListener('click', function(e){
    e.preventDefault();
    //increase the score 
})

let playBtn = document.querySelector('#playBtn');
let playerInput = document.querySelector('#playerInput');
let playAgainBtn = document.querySelector('#playAgainBtn');
let hint = document.querySelector('.hint');
let keyboard = document.querySelectorAll('.keyboardBtn');
let winner = document.querySelector('.winner')

//Display input field after the player click on 'Enter your own' btn
let ownChoiceBtn = document.querySelector('#ownChoiceBtn');
ownChoiceBtn.addEventListener('click', (e) => {
  e.preventDefault();
  playerInput.style.display = 'block';
});


// ***** FUNCTIONS *****//


//Create arrays to host datas
let secretWord =["brazil", "venezuela", "cuba", "japan", "china", "germany", "france", "italy", "spain", "argentina", "united-states", "canada", "mexico", "colombia", "egypt", "iran", "india", "iraq", "israel", "greece", "nigeria", "australia", "sweden", "portugal", "equador", "peru", "dominican republic", "costa-rica", "afghanistan", "albania", "andorra", "belgium", "cameroon", "chile", "indonesia", "jamaica", "maldives", "morocco"]
let numOfChances = 6
let numOfLivesLeft = ''
let winCount = 0
let gameScore =[]
let ownWord = []
let letterGuessed =[]
let wrongGuess =[]
let correctGuess =[]
let displayWord =[]
// let wordDisplay = null

//Keep up Player Score
let score = () => {}


//Choose a random word if the player click 'Play' btn
//when the player click play, get a random word, display that with dashes
//when the player press the letter guesses check if that letter is in the random word
//If Yes add it to the correct guess and replace the dash with that letter
// if Not add it to the wrong guess, draw a part of the body and decrease the num of lives

let word = secretWord[Math.floor(Math.random() * secretWord.length)];

let playRandom = (e) => {
    e.preventDefault();
    let displayItem = word.replace(/./g, '<span class="dashes">_</span>');  //replace random word for '_'
    wordDisplay.innerHTML = displayItem
    console.log(word)

    //Display a hint when the player choses do play random
    hint.innerHTML = "Here is a hint: Name of a country!"
}
playBtn.addEventListener('click', playRandom)

//Compare selected letter with the random word and disable option of enter the same letter again, change background color of the selected letters.
let keyboardAction = keyboard.forEach(keyboardBtn => {
    keyboardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //Add a different style to the keyboard letter after its pressed and disable it so player can't press it again
    keyboardBtn.style.backgroundColor= 'lightBlue';
    keyboardBtn.style.color= 'black';
    keyboardBtn.disabled = true;

    let randomWord = word.split('')
    let dashes = document.getElementsByClassName('dashes')

    //if array contains the clicked value, replace the matched dash with letter, increase the  count so the game can end when count matches the word length.
    //else draw hangman body and decrease chances.
    if(randomWord.includes(keyboardBtn.innerText)){
        randomWord.forEach((randChar, i) => {
            //If character in arr is equals to pressed btn, replace dash with letter
            if(randChar === keyboardBtn.innerText){
                dashes[i].innerText = randChar;

                //increment counter
                winCount +=1

                //display a message if player wins
                if(winCount === randomWord.length){
                    winner.innerHTML = `You Win! The word was ${word}`
                }
            }
        })
    }
   
    })  
})


    






//Get Player input and add it to an arr and hide the input field
let userInput = (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        ownWord.push(playerInput.value);
        playerInput.style.display = 'none'
        console.log(ownWord);
    }
}
playerInput.addEventListener('keypress', userInput)


    

//Restart the game if the player click on 'Play again' btn
let playAgain = (e) => {
    e.preventDefault();
    playAgain() //add func later
}
    playAgainBtn.addEventListener('click', playAgain)





comparingPlayerInput()

let gameOver = function(){
    for(i = 0; i <= numOfChances; i++){
        if(numOfChances > 1){
            winCount += 1
        }

    }
}

// score()
// ownWord()
// playAgain()



// let playAgain = function(){
//     winCount = 0

// //erase all content from previous game
// wordDisplay.innerHTML = "";
// keyboard = "";
// letterGuessed = [];

// }

