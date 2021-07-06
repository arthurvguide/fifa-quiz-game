//Selecting required elements
const startBtn = document.getElementsByClassName("username-btn")[0]; 
const usernameScreen = document.getElementById("username-screen"); 
const leagueScreen = document.getElementById("league-screen"); 
const uefaBtn = document.getElementById("uefa");
const premierBtn = document.getElementById("premier");
const fifaBtn = document.getElementById("fifa");
const questionsScreen = document.getElementById("questions-screen");
const timer = document.getElementsByClassName("countdown")[0];
const nextBtn = document.getElementsByClassName("next-btn")[0];

// if Start Button ( on Username Screen ) clicked 

function removeUsernameScreen(e){
    usernameScreen.style.display = "none"; // hide Username Screen
    leagueScreen.style.display = "flex";   // Show Select League Screen
    let username = document.getElementById("username-input").value; // Get username value
    document.getElementsByClassName("username")[0].innerHTML = username; // Showing up Username on questions screen

};

startBtn.addEventListener("click", removeUsernameScreen); // Event to start button on click

// If Select League buttons clicked 

let questCount = 0;  // counter for questions 
let limitCount = 0; // This is for create a limit on ShowQuestions Functions, for only show up questions of each league

const questionBoard = document.getElementsByClassName("quest-board")[0]; 
let questNumber = 1; // Inital question number to show on board. Ex: 1 of 5 Questions

function uefaSelect(){   // user wants to play uefa league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(0);
    limitCount = 11; 
};
uefaBtn.addEventListener("click", uefaSelect);  

function premierSelect(){  // user wants to play premier league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(5);
    questCount = 5;
    limitCount = 6;
}
premierBtn.addEventListener("click", premierSelect);  

function fifaSelect(){  // user wants to fifa league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(10);
    questCount = 10;
    limitCount = 1;
}
fifaBtn.addEventListener("click", fifaSelect);  


// If next button clicked on quiz game

function nextQuestion() {     
    if(questCount < questions.length - limitCount){
        questCount++;
        questNumber++;
        showQuestions(questCount);
        
    }

};

nextBtn.addEventListener("click", nextQuestion);
 
// getting questions and options from array and showing up
    const optionsBox = document.getElementsByClassName("options-box")[0];
    const questionBox = document.getElementsByClassName("question-box")[0];
    
function showQuestions(index) {
    
    //creating a new span tag for question and option and passing the value using array index   
    let queTag = '<span><h4>'+ questions[index].question +'</h4></span>';
    
    let optionTag = 
    '<span class="option">'+ questions[index].options[0] +'</span>'
    + '<span class="option">'+ questions[index].options[1] +'</span>'
    + '<span class="option">'+ questions[index].options[2] +'</span>'
    + '<span class="option">'+ questions[index].options[3] +'</span>';
    questionBox.innerHTML = queTag; //adding new span tag inside queTag
    optionsBox.innerHTML = optionTag; //adding new spans tag inside optionTag
    questBoardF(); // calling currently question to the board. Ex: 2 of 5 Questions 
    startTimer(15);

    // set onclick attribute to all available options 
    
    const options = optionsBox.querySelectorAll(".option");

    for(i=0; i < options.length; i++){
        options[i].setAttribute("onclick", "optionSelected(this)");
    };
};
   
    
//if user clicked on option

function optionSelected(answer) {
    clearInterval(counter); // stoping counter once user clicked in an option
    console.log(answer.textContent);
    let userAnswer = answer.textContent;
    let rightAnswer = questions[questCount].answer;
    let allOptions = optionsBox.children.length;

    if( userAnswer == rightAnswer){
        answer.style.backgroundColor = "rgba(0, 93, 255, 0.6)"; // Change right answer to blue color
        console.log("Right Answer");
    }
    else {
        answer.style.backgroundColor = "red";
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){  // Auto selecting correct answer
            if(optionsBox.children[i].textContent == rightAnswer){ 
            optionsBox.children[i].style.backgroundColor = "rgba(0, 93, 255, 0.6)"; //adding blue color to matched
            };
        } ;
    };
    for(i=0; i < allOptions; i++){
    optionsBox.children[i].classList.add("disabled");   // Once user select an option then disabled all options
    };
};
// Showing up the number of currently question on board 

function questBoardF() {
    let currentlyQuestion = `<h4>`  + questNumber + ` of 5 Questions` + `</h4>`;
    questionBoard.innerHTML = currentlyQuestion;
}; 


// Countdown Timer function
let counter; 
let timerBox = document.getElementsByClassName("timer-box")[0];
let timeValue =  15;

function startTimer(timeValue){
    counter = setInterval(timer, 1000);
    function timer(){
        timerBox.innerHTML = timeValue; //changing the value of timeCount with time value
        timeValue--; //decrement the time value
        if(timeValue < 9){ //if timer is less than 9
            let addZero = timeValue; 
            timerBox.innerHTML = "0" + addZero; //add a 0 before time value
        } 
        
        if(timeValue < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timerBox.innerHTML = "Time Off"; //change the time text to time off
        const allOptions = optionsBox.children.length; //getting all option items
        let correcAns = questions[questCount].answer; //getting correct answer from array
        for(i=0; i < allOptions; i++){
            if(optionsBox.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
            optionsBox.children[i].style.backgroundColor = "rgba(0, 93, 255, 0.6)" ; //adding blue color to matched option 
            };

            for(i=0; i < allOptions; i++){
                optionsBox.children[i].classList.add("disabled");   // Once user select an option then disabled all options
                }
        };
      };
    };
}; 