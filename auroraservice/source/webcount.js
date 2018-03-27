var webcount = {
    create: function(apiKey) {
        if (apiKey.length == 48) {
            user = apiKey.substring(0, 16);
            site = apiKey.substring(16, 32);
            page = apiKey.substring(32, 48);

            document.body += "<iframe src='https://liveg-technologies.github.io/auroraservice/embed/source/webcount.html?user=" + user + "&site=" + site + "&page=" + page + "' width='0' height='0' style='border: none;'>";

            console.log("Aurora Webocunt initialised successfully.");
        } else {
            throw("The API key is invalid. It should be 48 characters long.");
        }
    }
}