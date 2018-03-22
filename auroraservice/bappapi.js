// Initialize Firebase
var config = {
    apiKey: "AIzaSyA_SBi5bWlglxReIf1VJcX7ts71uKX8pIw",
    authDomain: "aurora-borealis-account.firebaseapp.com",
    databaseURL: "https://aurora-borealis-account.firebaseio.com",
    projectId: "aurora-borealis-account",
    storageBucket: "aurora-borealis-account.appspot.com",
    messagingSenderId: "360682466514"
};
firebase.initializeApp(config);
var database = firebase.database();

var setup = {
    appName: null,
    storedAs: null,
    loggedIn: false,
    userUid: null
}

var currentUid = null;
firebase.auth().onAuthStateChanged(function(user) {
    // Checks if user auth state has changed.
    if (typeof(Storage) !== "undefined") {
        if (user && user.uid != currentUid) {
            // Sign in operation.
            setup.loggedIn = true;
            setup.userUid = user.uid;
        } else {
            // Sign out operation.
            setup.loggedIn = false;
            setup.userUid = null;
        }
    } else {
        alert("Sorry! You will not be able to use " + appName + " on this device as it does not support HTML5 web storage.");
    }
});

var app = {
    load: function(knownAs, storedAs) {
        setup.appName = knownAs;
        setup.appDatabase = storedAs;
    },
    write: function(tag, data) {
        if (setup.loggedIn != false && setup.storedAs != null) {
            firebase.database().ref("users/" + setup.userUid + "/" + setup.appDatabase + "/" + tag).set(data);
        }
    }
}