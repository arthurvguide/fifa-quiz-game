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
        showQuestions(questCount);
    }

};

nextBtn.addEventListener("click", nextQuestion);
 

// getting questions and options from array and showing up

function showQuestions(index) {
    const questionBox = document.getElementsByClassName("question-box")[0];
    const optionsBox = document.getElementsByClassName("options-box")[0];

    //creating a new span tag for question and option and passing the value using array index   
    let queTag = '<span><h4>'+ questions[index].question +'</h4></span>';
    
    let optionTag = 
    '<span>'+ questions[index].options[0] +'</span>'
    + '<span>'+ questions[index].options[1] +'</span>'
    + '<span>'+ questions[index].options[2] +'</span>'
    + '<span>'+ questions[index].options[3] +'</span>';
    questionBox.innerHTML = queTag; //adding new span tag inside que_tag
    optionsBox.innerHTML = optionTag; //adding new spans tag inside option_tag
};
   
