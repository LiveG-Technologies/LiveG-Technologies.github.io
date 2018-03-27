var webcount = {
    create: function(apiKey) {
        if (apiKey.length == 68) {
            user = apiKey.substring(0, 28);
            site = apiKey.substring(28, 48);
            page = apiKey.substring(48, 68);

            document.body.innerHTML += "<iframe src='https://liveg-technologies.github.io/auroraservice/embed/source/webcount.html?user=" + user + "&site=" + site + "&page=" + page + "' width='0' height='0' style='border: none;'>";

            console.log("Aurora Webocunt initialised successfully.");
        } else {
            throw("The API key is invalid. It should be 68 characters long.");
        }
    }
}