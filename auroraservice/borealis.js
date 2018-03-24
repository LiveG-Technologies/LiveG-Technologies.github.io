document.getElementById("notsupported").style.display = "none";

function change(user) {
    if (typeof(Storage) !== "undefined") {
        if (user && user.uid != currentUid) {
            // Sign in operation.
            document.getElementById("login").style.display = "none";
            document.getElementById("logout").style.display = "unset";
        } else {
            // Sign out operation.
            document.getElementById("login").style.display = "unset";
            document.getElementById("logout").style.display = "none";
        }
    } else {
        alert("Sorry! You will not be able to use your Borealis account on this device as it does not support HTML5 web storage.");
    }
}

var currentUid = null;
firebase.auth().onAuthStateChanged(function(user) {
    // Checks if user auth state has changed.
    change(user);
});

function checkFields() {
    if (document.getElementById("user").value != "" && document.getElementById("pass").value != "") {
        return true;
    } else {
        document.getElementById("error").innerHTML = "Oops! You have not filled out all of the required fields.";
        return false;
    }
}

function login() {
    if (checkFields()) {
        firebase.auth().signInWithEmailAndPassword(document.getElementById("user").value, document.getElementById("pass").value).catch(function(error) {
            document.getElementById("error").innerHTML = "Oops! " + error.message.replace(/email/g, "e-mail").replace(/E-mail/g, "E-mail");
        });
    }
}

function signup() {
    if(checkFields()) {
        firebase.auth().createUserWithEmailAndPassword(document.getElementById("user").value, document.getElementById("pass").value).catch(function(error) {
            document.getElementById("error").innerHTML = "Oops! " + error.message.replace(/email/g, "e-mail").replace(/E-mail/g, "E-mail");
        });
    }
}

function logout() {
    firebase.auth().signOut().catch(function(error) {
        document.getElementById("error").innerHTML = "Oops! Something went wrong on our side. Try again soon!";
    });
}

var input = document.getElementById("pass");

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        login();
    }
});