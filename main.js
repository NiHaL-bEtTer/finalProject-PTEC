function contruction () { //not in use anymore
    window.location.href = 'under-construction.html';
}

function verifyLogin() { //simple fnuction that gets the value from local storage if ur logged in or not, if u logged in  it askes u a prompt if u want to log out, if the users response is yes in upercase or lowercase then we remove that they are loggin in from local storage and send the user to the login page
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (loggedIn) {
        let answer = prompt('You are logged in!, Do you want to log out?');
        if (answer.toLocaleUpperCase() === 'YES') {
            localStorage.removeItem('isLoggedIn');
            alert('You have Logged Out')
        }
        } else {
        window.location.href = 'login-signup.html';
        }
        
    }