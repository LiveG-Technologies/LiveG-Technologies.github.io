var webcount = {
    apiKey: "",

    create: function(apiKey) {
        if (apiKey.length == 68) {
            user = apiKey.substring(0, 28);
            site = apiKey.substring(28, 48);
            page = apiKey.substring(48, 68);

            document.body.innerHTML += "<iframe src='https://liveg-technologies.github.io/auroraservice/embed/source/webcount.html?user=" + user + "&site=" + site + "&page=" + page + "' width='0' height='0' style='border: none;'>";

            webcount.apiKey = apiKey;

            console.log("Aurora Webcount initialised successfully.");
        } else {
            throw("The API key is invalid. It should be 68 characters long.");
        }
    },

    data: function(callback) {
        var id = Math.floor(Math.random() * 100000);

        document.body.insertAdjacentHTML("beforeend", "<iframe id='dataGet" + id + "' src='https://liveg-technologies.github.io/auroraservice/source/data.html?apiKey=" + webcount.apiKey + "' width='0' height='0' style='border: none;'></iframe>");

        setInterval(function() {
            try {
                
                if (document.getElementById("dataGet" + id).contentWindow.document.getElementById("json").innerHTML.charAt(0) == "{") {
                    callback(document.getElementById("dataGet" + id).contentWindow.document.getElementById("json").innerHTML);
                }
            } catch (e) {}
        }, 100);
    }
}