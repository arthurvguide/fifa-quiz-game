// SELECTION REQUIRED ELEMENTS 
const startBtn = document.getElementsByClassName("username-btn")[0]; 
const usernameScreen = document.getElementById("username-screen"); 
const leagueScreen = document.getElementById("league-screen"); 
const uefaBtn = document.getElementById("uefa");
const premierBtn = document.getElementById("premier");
const fifaBtn = document.getElementById("fifa");
const questionsScreen = document.getElementById("questions-screen");
const nextBtn = document.getElementsByClassName("next-btn")[0];
const resultScreen = document.getElementById("results-screen");
let username;

// IF START BUTTON IS CLICKED

function removeUsernameScreen(e){
    username = document.getElementById("username-input").value; // Get username value
    // Validating username field
    if (username == "") {
        alert("Username must be filled out");
        return false;
      } else {
        usernameScreen.style.display = "none"; // hide Username Screen
        leagueScreen.style.display = "flex";   // Show Select League Screen
        document.getElementsByClassName("username")[0].innerHTML = username; // Showing up Username on questions screen
      }

}

startBtn.addEventListener("click", removeUsernameScreen); // Event to start button on click
  

// USER SELECT A LEAGUE TO PLAY

let questCount = 0;  // counter for questions 
let limitCount = 0; // This is for create a limit on ShowQuestions Functions, for only show up questions of each league
let userScore = 0; // Inital User Score
const questionBoard = document.getElementsByClassName("quest-board")[0]; 
let questNumber = 1; // Inital question number to show on board. Ex: 1 of 5 Questions, 3 of 5 questions.

function uefaSelect(){   // user wants to play uefa league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(0);
    limitCount = 11; 
}
uefaBtn.addEventListener("click", uefaSelect);  

function premierSelect(){  // user wants to play premier league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(5);
    questCount = 5;
    limitCount = 6; // this is to show up only premier league questions 
}
premierBtn.addEventListener("click", premierSelect);  

function fifaSelect(){  // user wants to fifa league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(10);
    questCount = 10;
    limitCount = 1; // this is to show up only fifa league questions 
}
fifaBtn.addEventListener("click", fifaSelect);  // event to fifa button on click

// IF NEXT BUTTON IS CLICKED 

function nextQuestion() {     
    if(questCount < questions.length - limitCount){
        questCount++;
        questNumber++;
        showQuestions(questCount); // calling showQuestions function 
        nextBtn.classList.remove("show-btn"); // hide the next button
    }
    else {
        showResult(); // Calling show results function at the end of questions
    }

}

nextBtn.addEventListener("click", nextQuestion); // event to fifa button on click

// Getting questions and options from array and showing up
    const optionsBox = document.getElementsByClassName("options-box")[0];
    const questionBox = document.getElementsByClassName("question-box")[0];
    
function showQuestions(index) {
    
    // Creating a new span tag for question and option and passing the value using array index   
    let queTag = '<span><h4>'+ questions[index].question +'</h4></span>';
    
    let optionTag = 
    '<span class="option">' + questions[index].options[0] +'</span>'
    + '<span class="option">' + questions[index].options[1] +'</span>'
    + '<span class="option">' + questions[index].options[2] +'</span>'
    + '<span class="option">' + questions[index].options[3] +'</span>';
    questionBox.innerHTML = queTag; //adding new span tag inside queTag
    optionsBox.innerHTML = optionTag; //adding new spans tag inside optionTag
    questBoardF(); // calling currently question to the board. Ex: 2 of 5 Questions 
    startTimer(15);

    // set onclick attribute to all available options 
    
    const options = optionsBox.querySelectorAll(".option");

    for(let i=0; i < options.length; i++){
        options[i].setAttribute("onclick", "optionSelected(this)");
    }
}
   
// IF USER SELECT AN ANSWER OPTION

function optionSelected(answer) {
    clearInterval(counter); // stoping counter once user clicked in an option
    let userAnswer = answer.textContent;
    let rightAnswer = questions[questCount].answer;
    let allOptions = optionsBox.children.length;

    if( userAnswer == rightAnswer){
        answer.style.backgroundColor = "rgba(0, 93, 255, 0.6)"; // Change right answer background to blue 
        userScore += 1; // if answer is right, adding 1 point to user score
    }
    else {
        answer.style.backgroundColor = "#DE0421"; // Change wrong question background to red

        for(let i=0; i < allOptions; i++){  // Auto selecting correct answer
            if(optionsBox.children[i].textContent == rightAnswer){ 
            optionsBox.children[i].style.backgroundColor = "rgba(0, 93, 255, 0.6)"; // Adding blue color to the right answer
            }
        } 
    }
    for(let i=0; i < allOptions; i++){
    optionsBox.children[i].classList.add("disabled");   // Once user select an option then disabled all options
    }
     
     nextBtn.classList.add("show-btn"); // Show the next button if user selected any option

}

//  SHOWING UP CURRENTLY QUESTION NUMBER ON BOARD

function questBoardF() {
    let currentlyQuestion = `<h4>`  + questNumber + ` of 5 Questions` + `</h4>`;
    questionBoard.innerHTML = currentlyQuestion;
}

// COUNTDOWN TIMER FUNCTION

let counter; 
let timerBox = document.getElementsByClassName("timer-box")[0];


function startTimer(timeValue){
    counter = setInterval(timer, 1000);
    function timer(){
        timerBox.innerHTML = timeValue; // Changing the value of timeBox with time value
        timeValue--; // decrement the time value
        if(timeValue < 9){ // if timer is less than 9
            let addZero = timeValue; 
            timerBox.innerHTML = "0" + addZero; //add a 0 before time value
        } 
        
        if(timeValue < 0){ // if timer is less than 0
            clearInterval(counter); // clear counter
            timerBox.innerHTML = "Time Off"; // change the time text to time off
        const allOptions = optionsBox.children.length; // getting all option items
        for(let i=0; i < allOptions; i++){
            for(let i=0; i < allOptions; i++){
                optionsBox.children[i].classList.add("disabled");   // Once user select an option then disabled all options
                }
                
            nextBtn.classList.add("show-btn"); //show the next button if user selected any option
        }
      }
    }
}

// SHOWING RESULTS 

function showResult() {
    usernameScreen.style.display = "none"; // hide Username Screen
    leagueScreen.style.display = "none";   // Hide League Screen
    questionsScreen.style.display = "none";   // Hide Questions Screen
    resultScreen.style.display = "flex"; // showing up result screen

    const resultBox = document.getElementsByClassName("result-box")[0];

    if(userScore > 3){
        let scoreMessage = "<h4> Hello, " + username + "</h4>" + "<p> Congratsss! You scored " + userScore + " out of 5 questions. </p>" + "<p>You're a true football fan!!!</p>";
        resultBox.innerHTML = scoreMessage;
    }
    else {
        let scoreMessage = "<h4> Hello, " + username + "</h4>" + "<p> Sorry! But you scored only " + userScore + " out of 5 questions. </p>" + "<p>You're not a true football follower!!!</p>";
        resultBox.innerHTML = scoreMessage;
    }
  
}

  // IF USER WANTS TO PLAY AGAIN 
  const againBtn = document.getElementsByClassName("again-btn")[0];
  function tryAgain() {
    questCount = 0; 
    questNumber = 1;
    userScore = 0;
    resultScreen.style.display = "none"; // hide result screen
    questionsScreen.style.display = "none"; // hide Questions Screen
    leagueScreen.style.display = "flex";   // Show Select League Screen
    
}
  againBtn.addEventListener("click", tryAgain);