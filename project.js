//Choose a random word if the player click 'Play' btn
//when the player click play, get a random word, display that with dashes
//when the player press the letter guesses check if that letter is in the random word
//If Yes add it to the correct guess and replace the dash with that letter
// if Not add it to the wrong guess, draw a part of the body and decrease the num of lives
//Do the same with the user input

//GET HTML ELEMENTS 
let scoreBtn = document.querySelector('#scoreBtn');
let playBtn = document.querySelector('#playBtn');
let playAgainBtn = document.querySelector('#playAgainBtn');
let hint = document.querySelector('.hint');
let keyboard = document.querySelectorAll('.keyboardBtn');
let winner = document.querySelector('.winner')
let loser = document.querySelector('.loser')
let man = document.getElementById('hangmanCanvas');
let canvas = document.getElementById('hangmanCanvas');
let dashes = document.getElementsByClassName('dashes')
let letterBtn = document.querySelectorAll('.keyboardBtn');
let optionsBtn = document.querySelectorAll('.btnJs');
let wordDisplay = document.getElementById('wordDisplay')
let numOfLives = document.getElementById('numOfLives')

// ***** FUNCTIONS *****//
//Game count
let numOfChances = 6
let winCount = 0

scoreBtn.addEventListener('click', function(e){
    e.preventDefault(); })

numOfLives.addEventListener('click', function(e){
    e.preventDefault(); })

//Get a random word, replace it with dash and display it on the screen
let secretWord =["brazil", "venezuela", "cuba", "japan", "china", "germany", "france", "italy", "spain", "argentina", "united-states", "canada", "mexico", "colombia", "egypt", "iran", "india", "iraq", "israel", "greece", "nigeria", "australia", "sweden", "portugal", "equador", "peru", "dominican-republic", "costa-rica", "afghanistan", "albania", "andorra", "belgium", "cameroon", "chile", "indonesia", "jamaica", "maldives", "morocco"]
let word = secretWord[Math.floor(Math.random() * secretWord.length)];

let playRandom = () => {
    let displayItem = word.replace(/./g, '<span class="dashes">_</span>');  //replace random word for '_' //
    wordDisplay.innerHTML = displayItem
    console.log(word)
}

//Calling game after press the play btn
function playBtnAction(){
    hint.innerHTML = " Here is a hint: <span style='color: red'>Name of a country!</span> " //Display a hint when the player choses do play random//
    optionsBtnBlocker();
    playRandom()
    drawGallows();
    gamePlay();
}
playBtn.addEventListener('click', playBtnAction)   

//BLOCK BUTTONS AFTER YOU START, LOSE OR WIN THE GAME
//block all keyboard buttons
let keyboadBtnBlocker = () => {
    letterBtn.forEach((button) => {
    button.disabled = true;
    })
}

//block all game options btn 
let optionsBtnBlocker = () => {
    optionsBtn.forEach((button) => {
    button.disabled = true;
  });
}

function gamePlay(){ 
    keyboard.forEach(keyboardBtn => {
    keyboardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    keyboardBtn.style.backgroundColor= 'lightBlue'; 
    keyboardBtn.style.color= 'black';
    keyboardBtn.disabled = true;

    let randomWord = word.split('')
 //if array contains the clicked value, replace the matched dash with letter, increase the  count or decrease the chances
    if(randomWord.includes(keyboardBtn.innerText)){
        randomWord.forEach((randChar, i) => {
            //If character in arr is equals to pressed btn, replace dash with letter
            if(randChar === keyboardBtn.innerText){
                dashes[i].innerText = randChar;
                //increment counter
                winCount +=1
                checkForWinner()
                }
            }
        )  
    }
    else{
        numOfChances -= 1
        numOfLives.value = `Num of Lives Left: ${numOfChances}`
        drawMan()
        checkGameIsOver()
    }
    })
    })  
}

function checkForWinner(){
    if(winCount === word.length){
        winner.style.display = 'block'
        winner.innerHTML = `<span style='color: pink'>You Win! </span> The word was ${word}`
        scoreBtn.value += 1
        keyboadBtnBlocker()
        optionsBtnBlocker()  
    }
}

function checkGameIsOver(){
    if(numOfChances < 1){
        loser.style.display = 'block'
        loser.innerHTML = `<span style='color: pink'>You lost! </span>the word was ${word}`
        
        keyboadBtnBlocker()
        optionsBtnBlocker()
    }
}

// ***  DRAW THE HANGMAN *** //
// Draw man
let drawMan = function(){
    let drawMe = numOfChances;
    drawArr[drawMe]();
}

//Draw hangman structure      
drawGallows = function (){
    let context = canvas.getContext("2d"); //canvas is my var name, get context returns a drawing context on the canvas
    context.strokeStyle = "black";
    context.beginPath(); 
    context.moveTo(100, 1); //first is the horizontal coordinate to be moved to, second is the vertical coordinate to be moved to.
    context.lineTo(100, 200); // first is the x-axis coordinate of the line's end point, sec is the y-axis coordinate of the line's end point.
    context.moveTo(100, 1);
    context.lineTo(210, 1); 
    context.moveTo(210, 30); 
    context.lineTo(210, 1);
    context.stroke(); //call all the moves
}
//Hangman head
head = function(){
    context = man.getContext('2d');
    context.beginPath();
    context.arc(210, 40, 10, 0, 2*Math.PI, true); //The head //arc(x, y, radius, startAngle, endAngle, counterclockwise) start point width, start point hight, radios size, start angle 0 and end angle to 2*Math.PI. (start angle in a circle is 0, then 0.5*PI, then 1*PI, 1.5*PI, 2*PI)
    context.stroke();
    }
//Cordinates for drawing parts of the body
draw = function(fromX, fromY, toX, toY) {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke(); 
}
//Hangman body
torso = function() {
    draw(210, 50, 210, 110); //first and second are width and higth start point, third is width size, fourth hight direction
   };
leftArm = function() {
    draw(210, 60, 180, 80);
  };
rightArm = function() {
    draw(210, 60, 240, 80); 
   };
leftLeg = function() {
    draw(210, 110, 180, 130);
  };
rightLeg = function() {
    draw(210, 110, 240, 130);
   };
  
drawArr= [rightLeg, leftLeg, rightArm, leftArm,  torso,  head]; 

//Reset game 
function resetGame(){
    context.clearRect(0, 0, 400, 300)
    word = secretWord[Math.floor(Math.random() * secretWord.length)];
    winCount = '';
    numOfChances = 6
    hint.innerHTML = '';
    winner.style.display = 'none'
    winner.innerHTML = '';
    loser.style.display = 'none'
    loser.innerHTML = '';
    numOfLives.innerHTML = ''
    // drawArr=[]
    console.log(`New random word is ${word}`)
}

//reset the game if the player click on 'Play again' btn
playAgainBtn.addEventListener('click', function(){
    keyboard.forEach((kb) => {
        if(kb.disabled == true){
            kb.disabled = false
            kb.style.color= 'black';
            kb.style.backgroundColor = 'white'
        }
    })

    optionsBtn.forEach((ob) => {
        if(ob.disabled == true){
        ob.disabled = false;
        }
      })
      resetGame()
      gamePlay()
    })
    //reset wincount
    //fix lose count

//    




