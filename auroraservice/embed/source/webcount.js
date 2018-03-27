var bot = true;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

user = getURLParameter("user");
site = getURLParameter("site");
page = getURLParameter("page");

firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").once("value").then(function(snapshot) {
    var data = snapshot.val();
    if (data == null) {data = 0};

    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").set(data + 1);
});

firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").once("value").then(function(snapshot) {
    var data = snapshot.val();
    if (data == null) {data = 0};

    firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").set(data + 1);
});

setInterval(function() {
    if (bot == true) {
        if (document.getElementById("pendCheck").contentWindow.location.href == "https://liveg-technologies.github.io/auroraservice/bbotdone.html") {
            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").once("value").then(function(snapshot) {
                var data = snapshot.val();
                if (data == null) {data = 0};

                firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/bots").set(data - 1);
            });

            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").once("value").then(function(snapshot) {
                var data = snapshot.val();
                if (data == null) {data = 0};

                firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/bots").set(data - 1);
            });
            
            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/visits").once("value").then(function(snapshot) {
                var data = snapshot.val();
                if (data == null) {data = 0};

                firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/pages/" + page + "/data/visits").set(data + 1);
            });

            firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/visits").once("value").then(function(snapshot) {
                var data = snapshot.val();
                if (data == null) {data = 0};

                firebase.database().ref("users/" + user + "/webcount/sites/" + site + "/data/visits").set(data + 1);
            });

            bot = false;
        }
    }
}, 10000);