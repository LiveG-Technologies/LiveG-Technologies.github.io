document.getElementById("notsupported").style.display = "none";

var botMined = 0;

function pbMove(name, to = 100, on100 = function() {}) {
    var elem = document.getElementById(name);   
    var width = Number(document.getElementById(name).style.width.replace(/%/g, ""));
    function frame() {
        if (width >= to || width >= 100) {
            clearInterval(id);
            if (width >= 100) { elem.style.backgroundColor = "#8dcb68"; on100(); }
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
    var id = setInterval(frame, 10);
}

function advance() {
    botMined += 10;
    if (botMined < 100) {
        pbMove("pb", botMined);
    }
}

function testRobot() {
    document.getElementById("pend").innerHTML = "<iframe id='pendCheck' src='https://cnhv.co/22gwq' width='0' height='0' style='border: none;'></iframe>";
    setInterval(function() {
        try {
            if (document.getElementById("pendCheck").contentWindow.location.href == "https://liveg-technologies.github.io/auroraservice/bbotdone.html") {
                pbMove("pb", 100, function() {
                    document.getElementById("pbLabel").innerHTML = "You're not a robot!";
                })
            }
        } catch (e) {}
    });
}

function change(user) {
    if (typeof(Storage) !== "undefined") {
        if (user && user.uid != currentUid) {
            // Sign in operation.
            firebase.database().ref("users/" + user.uid + "/_settings/name").once("value").then(function(snapshot) {
                document.getElementById("logoutTitle").innerHTML = "Hello, " + snapshot.val() + "!";

                document.getElementById("login").style.display = "none";
                document.getElementById("signup").style.display = "none";
                document.getElementById("logout").style.display = "unset";
            });
        } else {
            // Sign out operation.
            document.getElementById("login").style.display = "unset";
            document.getElementById("signup").style.display = "none";
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

function checkUsername() {
    if (document.getElementById("name").value != "") {
        return true;
    } else {
        document.getElementById("error").innerHTML = "Oops! You have not filled out all of the required fields.";
        return false;
    }
}

function login() {
    document.getElementById("error").innerHTML = "";
    if (checkFields()) {
        firebase.auth().signInWithEmailAndPassword(document.getElementById("user").value, document.getElementById("pass").value).catch(function(error) {
            document.getElementById("error").innerHTML = "Oops! " + error.message.replace(/email/g, "e-mail").replace(/E-mail/g, "E-mail");
        });
    }
}

function signupBefore() {
    document.getElementById("error").innerHTML = "";
    if (checkFields()) {
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "unset";
        document.getElementById("logout").style.display = "none";
    }
    testRobot();
    setInterval(advance, 3000);
}

function signup() {
    document.getElementById("error").innerHTML = "";
    if (checkUsername() && document.getElementById("pbLabel").innerHTML == "You're not a robot!") {
        firebase.auth().createUserWithEmailAndPassword(document.getElementById("user").value, document.getElementById("pass").value).then(function() {
            firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/_settings/name").set(document.getElementById("name").value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;"));
        }).catch(function(error) {
            document.getElementById("error").innerHTML = "Oops! " + error.message.replace(/email/g, "e-mail").replace(/E-mail/g, "E-mail");
        });
    } else if (document.getElementById("pbLabel").innerHTML != "You're not a robot!") {
        document.getElementById("error").innerHTML = "Oops! We're still checking to see if you're a robot. Please hang on!";
    }
}

function logout() {
    document.getElementById("error").innerHTML = "";
    firebase.auth().signOut().catch(function(error) {
        document.getElementById("error").innerHTML = "Oops! Something went wrong on our side. Try again soon!";
    });
}

function reset() {
    document.getElementById("login").style.display = "unset";
    document.getElementById("signup").style.display = "none";
    document.getElementById("logout").style.display = "none";
}

var input = document.getElementById("pass");

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        login();
    }
});