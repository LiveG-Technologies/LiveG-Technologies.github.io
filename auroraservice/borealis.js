document.getElementById("notsupported").style.display = "none";

function iframed() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function checkFields(login = true) {
    if (document.getElementById("user").value != "" && document.getElementById("pass").value != "") {
        return true;
    } else {
        document.getElementById("error").innerHTML = "You have not filled out all of the required fields.";
        return false;
    }
}

function login() {
    if (checkFields(true)) {
        localStorage.setItem("username", document.getElementById("user").value);
    }
}

function signup() {
    checkFields(false);
}

function change() {
    if (typeof(Storage) !== "undefined") {
        var user = localStorage.getItem("username");
        var pass = localStorage.getItem("password");

        if (user == null) {
            document.getElementById("login").style.display = "unset";
            document.getElementById("logout").style.display = "none";
        } else {
            document.getElementById("login").style.display = "none";
            document.getElementById("logout").style.display = "unset";
        }
    } else {
        alert("Sorry! You will not be able to use your Borealis account on this device as it does not support HTML5 web storage.");
    }
}

change();