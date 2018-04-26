var bot = true;
var botTimeout = 2;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var user = getURLParameter("user");
var site = getURLParameter("site");
var page = getURLParameter("page");

function botDiscount() {
    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").once("value").then(function(snapshot) {
        var data = snapshot.val();
        if (data == null) {data = 0;}

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").set(data - 1);
    });

    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").once("value").then(function(snapshot) {
        var data = snapshot.val();
        if (data == null) {data = 0;}

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").set(data - 1);
    });
    
    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/visits").once("value").then(function(snapshot) {
        var data = snapshot.val();
        if (data == null) {data = 0;}

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/visits").set(data + 1);
    });

    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/visits").once("value").then(function(snapshot) {
        var data = snapshot.val();
        if (data == null) {data = 0;}

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/visits").set(data + 1);
    });

    $.getJSON("https://ipapi.co/json", function(data) {
        var country = data.region;

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/locations/" + country + "/visits").once("value").then(function(snapshot) {
            var data = snapshot.val();
            if (data == null) {data = 0;}

            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/locations/" + country + "/visits").set(data + 1);
        });

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/locations/" + country + "/visits").once("value").then(function(snapshot) {
            var data = snapshot.val();
            if (data == null) {data = 0;}

            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/locations/" + country + "/visits").set(data + 1);
        });
    });

    bot = false;
}

firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").once("value").then(function(snapshot) {
    var data = snapshot.val();
    if (data == null) {data = 0;}

    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").set(data + 1);
});

firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").once("value").then(function(snapshot) {
    var data = snapshot.val();
    if (data == null) {data = 0;}

    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").set(data + 1);
});

setInterval(function() {
    if (bot == true) {
        try {
            if (document.getElementById("pendCheck").contentWindow.location.href == "https://liveg-technologies.github.io/auroraservice/bbotdone.html") {
                botDiscount();
            } else {
                botTimeout -= 1;

                if (botTimeout == 0) {
                    botDiscount();
                }
            }
        } catch (e) {
            botTimeout -= 1;

            if (botTimeout == 0) {
                botDiscount();
            }
        }
    }
}, 5000);

setInterval(function () {
    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/mins").once("value").then(function(snapshot) {
        var data = snapshot.val();
        if (data == null) {data = 0;}

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/mins").set(data + 0.5);
    });

    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/mins").once("value").then(function(snapshot) {
        var data = snapshot.val();
        if (data == null) {data = 0;}

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/mins").set(data + 0.5);
    });

    $.getJSON("https://ipapi.co/json", function(data) {
        var country = data.region;

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/locations/" + country + "/mins").once("value").then(function(snapshot) {
            var data = snapshot.val();
            if (data == null) {data = 0;}

            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/locations/" + country + "/mins").set(data + 0.5);
        });

        firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/locations/" + country + "/mins").once("value").then(function(snapshot) {
            var data = snapshot.val();
            if (data == null) {data = 0;}

            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/locations/" + country + "/mins").set(data + 0.5);
        });
    });
}, 30000);