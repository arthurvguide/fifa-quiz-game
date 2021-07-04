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
    return username = document.getElementById("username-input").value; // Get username value
 
};

startBtn.addEventListener("click", removeUsernameScreen); // Event to start button on click

// If Select League buttons clicked 

function uefaSelect(){ 
    leagueScreen.style.display = "none"; // hide League Screen
    questionsScreen.style.display = "flex"; // show league Screen
    
};

uefaBtn.addEventListener("click", uefaSelect);


