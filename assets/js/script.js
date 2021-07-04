//Selecting all required elements
const startBtn = document.getElementsByClassName("username-btn")[0]; 
const usernameScreen = document.getElementById("username-screen"); 
const leagueScreen = document.getElementById("league-screen"); 
const uefaBtn = document.getElementById("uefa");
const premierBtn = document.getElementById("premier");
const fifaBtn = document.getElementById("fifa");
const questionsScreen = document.getElementById("questions-screen");

// if Start Button ( on Username Screen ) clicked

function removeUsernameScreen(e){
    usernameScreen.style.display = "none"; // hide Username Screen
    leagueScreen.style.display = "flex";   // Show Select League Screen
    let username = document.getElementById("username-input").value; // Get username value
    document.getElementsByClassName("username")[0].innerHTML = username; // Showing up Username on questions screen

};

startBtn.addEventListener("click", removeUsernameScreen); // Event to start button on click





// If Select League buttons clicked 

function uefaSelect(){   // user wants to play uefa league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(0);
};

uefaBtn.addEventListener("click", uefaSelect);  

function premierSelect(){  // user wants to play premier league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(0);
}
premierBtn.addEventListener("click", premierSelect);  

function fifaSelect(){  // user wants to fifa league
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    showQuestions(0);
}
fifaBtn.addEventListener("click", fifaSelect);  

// getting questions and options from array

function showQuestions(index) {
    const questionBox = document.getElementsByClassName("question-box")[0];
    const optionsBox = document.getElementsByClassName("options-box")[0];
//creating a new span and div tag for question and option and passing the value using array index   
    let que_tag = '<span><h4>'+ questionsUefa[index].numb + ". " + questionsUefa[index].question +'</h4></span>';
    
    let option_tag = 
    '<span>'+ questionsUefa[index].options[0] +'</span>'
    + '<span>'+ questionsUefa[index].options[1] +'</span>'
    + '<span>'+ questionsUefa[index].options[2] +'</span>'
    + '<span>'+ questionsUefa[index].options[3] +'</span>';
    questionBox.innerHTML = que_tag; //adding new span tag inside que_tag
    optionsBox.innerHTML = option_tag; //adding new spans tag inside option_tag
};
   
