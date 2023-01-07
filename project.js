//GET HTML ELEMENTS 

let scoreBtn = document.querySelector('#scoreBtn');
scoreBtn.addEventListener('click', function(e){
    e.preventDefault(); })

let playBtn = document.querySelector('#playBtn');
let playerInput = document.querySelector('#playerInput');
let playAgainBtn = document.querySelector('#playAgainBtn');
let hint = document.querySelector('.hint');
let keyboard = document.querySelectorAll('.keyboardBtn');
let winner = document.querySelector('.winner')
let loser = document.querySelector('.loser')
let ownChoiceBtn = document.querySelector('#ownChoiceBtn');
//Display input field after the player click on 'Enter your own' btn
ownChoiceBtn.addEventListener('click', (e) => {
  e.preventDefault();
  playerInput.style.display = 'block';
});

// ***** FUNCTIONS *****//
//Create arrays and variables to host datas
let secretWord =["brazil", "venezuela", "cuba", "japan", "china", "germany", "france", "italy", "spain", "argentina", "united-states", "canada", "mexico", "colombia", "egypt", "iran", "india", "iraq", "israel", "greece", "nigeria", "australia", "sweden", "portugal", "equador", "peru", "dominican-republic", "costa-rica", "afghanistan", "albania", "andorra", "belgium", "cameroon", "chile", "indonesia", "jamaica", "maldives", "morocco"]
let numOfChances = 6
let numOfLivesLeft = ''
let winCount = 0
// let ownWord = []

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
    optionsBtnBlocker()
    let displayItem = word.replace(/./g, '<span class="dashes">_</span>');  //replace random word for '_' //
    wordDisplay.innerHTML = displayItem
    console.log(word)
    hint.innerHTML = " Here is a hint: <span style='color: red'>Name of a country!</span> " //Display a hint when the player choses do play random//
    drawGallows()
}
playBtn.addEventListener('click', playRandom)

//BLOCK BUTTONS AFTER YOU START, LOSE OR WIN THE GAME
//block all keyboard buttons
let keyboadBtnBlocker = () => {
    let letterBtn = document.querySelectorAll(".keyboardBtn");
    letterBtn.forEach((button) => {
    button.disabled = true;
    })
}
//block all game options btn 
let optionsBtnBlocker = () => {
    let optionsBtn = document.querySelectorAll(".btnJs");
    optionsBtn.forEach((button) => {
    button.disabled = true;
  });
}

drawGallows = function (){
    var canvas = document.getElementById("hangmanCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(100, 1);
    ctx.lineTo(100, 200);
    ctx.moveTo(100, 1);
    ctx.lineTo(210, 1); //the first  is the size the second the direction you're pointing to
    ctx.moveTo(210, 30); //the first arg adjust the direction of your line, the sec the size
    ctx.lineTo(210, 1);
    ctx.stroke();
  

}


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

                //display a message if player wins and increase score
                if(winCount === randomWord.length){
                    winner.style.display = 'block'
                    winner.innerHTML = `<span style='color: red'>You Win! </span> The word was ${word}`
                    scoreBtn.value += 1
                    keyboadBtnBlocker()
                    optionsBtnBlocker()
                }
               
            }
        })
    }
    else{
        numOfChances -= 1
        animate()
        if(numOfChances < 1){
            loser.style.display = 'block'
            loser.innerHTML = `<span style='color: red'>You lost! </span>the word was ${word}`
            keyboardBtn.disabled = true
            keyboadBtnBlocker()
            optionsBtnBlocker()
        }
    }
    })  
})


//Get Player input and add it to an arr and hide the input field
// let userInput = (e) => {
//     if(e.key === "Enter"){
//         e.preventDefault();
//         // ownWord.push(playerInput.value);
//         playerInput.style.display = 'none'
//         // console.log(ownWord);

//         let userWord = playerInput.value.split('');
//         console.log(userWord)

//         if(userWord.includes(keyboardBtn.innerText)){
//             userWord.forEach((userChar, i) => {
//                 //If character in arr is equals to pressed btn, replace dash with letter
//                 if(userChar === key){
//                     dashes[i].innerText = userChar;
    
//                     //increment counter
//                     winCount +=1
    
//                     //display a message if player wins and increase score
//                     if(winCount === userWord.length){
//                         winner.innerHTML = `You <span style = 'color: red'> Win! </span> The word was ${word}`
//                         scoreBtn.value += 1
//                         keyboadBtnBlocker()
//                         optionsBtnBlocker()
//                     }
                   
//                 }
//             })
//         }
//         else{
//             numOfChances -= 1
//             if(numOfChances < 1){
//                 loser.innerHTML = `You lost! the word was ${word}`
//                 // keyboardBtn.disabled = true
//                 keyboadBtnBlocker()
//                 optionsBtnBlocker()
//             }
//         }
//         }  
//     }
// playerInput.addEventListener('keypress', userInput)


    

//Restart the game if the player click on 'Play again' btn
let playAgain = (e) => {
    e.preventDefault();
    wordDisplay.innerHTML = '';
    winCount = '';
    hint.innerHTML = '';

}
    playAgainBtn.addEventListener('click', playAgain)



// //erase all content from previous game
// wordDisplay.innerHTML = "";
// keyboard = "";
// letterGuessed = [];

// }

