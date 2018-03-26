// Initialise Firebase
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
    load: function(appName, storedAs) {
        setup.appName = appName;
        setup.storedAs = storedAs;
    },
    onLoginChange: function (callback) {
        firebase.auth().onAuthStateChanged(function(user) {
            // Checks if user auth state has changed.
            if (user && user.uid != currentUid) {
                // Sign in operation.
                callback(true);
            } else {
                // Sign out operation.
                callback(false);
            }
        });
    },
    write: function(tag, data) {
        if (setup.loggedIn != false && setup.storedAs != null) {
            firebase.database().ref("users/" + setup.userUid + "/" + setup.storedAs + "/" + tag).set(data);
        } else if (setup.storedAs == null) {
            throw("App not properly initialised. Please fix this by using the `app.load` command.")
        }
    },
    writeItem: function(tag, JSON, callback) {
        if (setup.loggedIn != false && setup.storedAs != null) {
            var itemRef = firebase.database().ref("users/" + setup.userUid + "/" + setup.storedAs + "/" + tag).push();
            itemRef.set(JSON);
            callback(itemRef.getKey());
        } else if (setup.storedAs == null) {
            throw("App not properly initialised. Please fix this by using the `app.load` command.")
        }
    },
    readOnce: function(tag, callback) {
        if (setup.loggedIn != false && setup.storedAs != null) {
            firebase.database().ref("users/" + setup.userUid + "/" + setup.storedAs + "/" + tag).once("value").then(function(snapshot) {
                callback(snapshot.val());
            });
        } else if (setup.storedAs == null) {
            throw("App not properly initialised. Please fix this by using the `app.load` command.")
        }
    },
    readOnChange: function(tag, callback) {
        if (setup.loggedIn != false && setup.storedAs != null) {
            firebase.database().ref("users/" + setup.userUid + "/" + setup.storedAs + "/" + tag).on("value", function(snapshot) {
                callback(snapshot.val());
            });
        } else if (setup.storedAs == null) {
            throw("App not properly initialised. Please fix this by using the `app.load` command.")
        }
    },
    readListOnce: function(tag, callbackAfter, callback1) {
        if (setup.loggedIn != false && setup.storedAs != null) {
            firebase.database().ref("users/" + setup.userUid + "/" + setup.storedAs + "/" + tag).once("value").then(function(snapshot) {
                callback1(snapshot.val());
                snapshot.forEach(function(childSnapshot) {
                    callbackAfter(childSnapshot.val(), childSnapshot.key);
                });
            });
        } else if (setup.storedAs == null) {
            throw("App not properly initialised. Please fix this by using the `app.load` command.")
        }
    },
    readListOnChange: function(tag, callbackAfter, callback1) {
        if (setup.loggedIn != false && setup.storedAs != null) {
            firebase.database().ref("users/" + setup.userUid + "/" + setup.storedAs + "/" + tag).on("value", function(snapshot) {
                callback1(snapshot.val());
                snapshot.forEach(function(childSnapshot) {
                    callbackAfter(childSnapshot.val(), childSnapshot.key);
                });
            });
        } else if (setup.storedAs == null) {
            throw("App not properly initialised. Please fix this by using the `app.load` command.")
        }
    }
}