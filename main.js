function contruction () {
    window.location.href = 'under-construction.html';
}

function verifyLogin() {
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