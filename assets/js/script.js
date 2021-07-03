// Getting Username Form - Beginning 

function getFormDetails(event) {
    
    event.preventDefault();
    
    let username = document.getElementsByClassName("username-input");
    console.log(username.value);
}

let usernameForm = document.getElementsByClassName('username-form');
usernameForm.addEventListener('submit', getFormDetails);

// Getting Username Form - End

