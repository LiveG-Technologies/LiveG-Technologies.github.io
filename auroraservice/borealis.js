document.getElementById("notsupported").style.display = "none";

function iframed() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function checkFields() {
    if (document.getElementById("user").value != "" && document.getElementById("pass").value != "") {
        return True;
    } else {
        document.getElementById("error").innerHTML = "You have not filled out all of the required fields.";
        return False;
    }
}

function login() {
    checkFields();
}

function signup() {
    checkFields();
}

function change() {
    if (typeof(Storage) !== "undefined") {
        var user = localStorage.getItem("username");

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

if (screen.availWidth <= 600 && !iframed()) {
    window.open(window.location.href, "window", "width = 800, height = 800");
}