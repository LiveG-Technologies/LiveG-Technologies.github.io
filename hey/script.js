var animals = ["Aardvark", "Aardwolf", "Albatross", "Alligator", "Alpaca", "Anaconda", "Anglerfish", "Ant", "Anteater", "Antelope", "Antlion", "Ape", "Aphid", "Armadillo", "Asp", "Axolotl", "Baboon", "Badger", "Bandicoot", "Barnacle", "Barracuda", "Basilisk", "Bass", "Bat", "Beaver", "Bedbug", "Bee", "Beetle", "Bison", "Blackbird", "Boa", "Bobcat", "Bobolink", "Bonobo", "Booby", "Bovid", "Buffalo", "Bug", "Bull", "Butterfly", "Buzzard", "Camel", "Canid", "Capybara", "Cardinal", "Caribou", "Carp", "Catshark", "Caterpillar", "Catfish", "Centipede", "Cephalopod", "Chameleon", "Cheetah", "Chickadee", "Chimpanzee", "Chinchilla", "Chipmunk", "Coati", "Cicada", "Clam", "Clownfish", "Cobra", "Cockroach", "Cod", "Condor", "Constrictor", "Coral", "Cougar", "Cow", "Coyote", "Coypu", "Crab", "Crane", "Crawdad", "Crayfish", "Cricket", "Crocodile", "Crow", "Cuckoo", "Damselfly", "Deer", "Dhole", "Dingo", "Dodo", "Dolphin", "Dormouse", "Dove", "Dragonfly", "Dragon", "Eagle", "Earthworm", "Earwig", "Echidna", "Eel", "Egret", "Elephant", "Elk", "Emu", "Ermine", "Falcon", "Ferret", "Fennec", "Finch", "Firefly", "Fish", "Flamingo", "Flea", "Fly", "Flyingfish", "Fowl", "Fox", "Frog", "Gazelle", "Gecko", "Gerbil", "Gibbon", "Giraffe", "Goldfish", "Gopher", "Gorilla", "Grasshopper", "Grebe", "Grouse", "Guanaco", "Gull", "Guppy", "Haddock", "Halibut", "Hamster", "Hare", "Harrier", "Hawk", "Hedgehog", "Heron", "Herring", "Hippopotamus", "Hookworm", "Hornet", "Hoverfly", "Human", "Hummingbird", "Hyena", "Hyrax", "Iguana", "Ibis", "Jackal", "Jacana", "Jaguar", "Jay", "Jellyfish", "Kangaroo", "Kingfisher", "Kite", "Kiwi", "Koala", "Koi", "Krill", "Ladybug", "Lamprey", "Landfowl", "Lapwing", "Lark", "Leech", "Lemming", "Lemur", "Leopard", "Leopon", "Limpet", "Lion", "Lionfish", "Lizard", "Llama", "Lobster", "Locust", "Loon", "Loris", "Louse", "Lungfish", "Lynx", "Macaw", "Mackerel", "Magpie", "Mallard", "Mammal", "Manatee", "Mandrill", "Marlin", "Marmoset", "Marmot", "Marsupial", "Marten", "Mastodon", "Maya", "Meadowlark", "Meerkat", "Mink", "Minnow", "Mite", "Mockingbird", "Mole", "Mollusk", "Mongoose", "Monkey", "Moose", "Mosquito", "Moth", "Mouse", "Mule", "Muskox", "Narwhal", "Needlefish", "Newt", "Nighthawk", "Nightingale", "Numbat", "Ocelot", "Octopus", "Okapi", "Olingo", "Opossum", "Orangutan", "Orca", "Oribi", "Ostrich", "Otter", "Owl", "Ox", "Panda", "Panther", "Parakeet", "Parrot", "Parrotfish", "Partridge", "Peacock", "Peafowl", "Pelican", "Penguin", "Perch", "Pheasant", "Pig", "Pike", "Pinniped", "Piranha", "Planarian", "Platypus", "Pony", "Porcupine", "Porpoise", "Possum", "Prawn", "Primate", "Ptarmigan", "Puffin", "Puma", "Python", "Quail", "Quelea", "Quetzal", "Quokka", "Raccoon", "Rat", "Rattlesnake", "Raven", "Reindeer", "Reptile", "Rhinoceros", "Roadrunner", "Rodent", "Rook", "Rooster", "Roundworm", "Sailfish", "Salamander", "Salmon", "Sawfish", "Scallop", "Scorpion", "Seahorse", "Serval", "Shrew", "Shrimp", "Silkworm", "Silverfish", "Skink", "Skunk", "Sloth", "Slug", "Smelt", "Snail", "Snipe", "Sole", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starfish", "Stingray", "Stoat", "Stork", "Sturgeon", "Swallow", "Swan", "Swift", "Swordfish", "Swordtail", "Tahr", "Takin", "Tapir", "Tarantula", "Tarsier", "Termite", "Tern", "Thrush", "Tick", "Tiger", "Tiglon", "Titi", "Toad", "Tortoise", "Toucan", "Trout", "Tuna", "Turtle", "Tyrannosaurus", "Urial", "Unicorn", "Vaquita", "Vicuña", "Viper", "Vixen", "Voalavoanala", "Vole", "Vulture", "Wallaby", "Walrus", "Wasp", "Warbler", "Waterbuck", "Weasel", "Whale", "Whippet", "Whitefish", "Wildcat", "Wildebeest", "Wildfowl", "Wolf", "Wolverine", "Wombat", "Woodchuck", "Woodpecker", "Worm", "Wren", "Xerinae", "Yak", "Zebra", "Zebu", "Zorilla", "Alpaca", "Cat", "Cattle", "Chicken", "Dog", "Donkey", "Ferret", "Gayal", "Goldfish", "Guppy", "Horse", "Koi", "Llama", "Sheep", "Yak"];
var adjectives = ["Attractive", "Beautiful", "Chubby", "Clean", "Dazzling", "Drab", "Elegant", "Fancy", "Fit", "Flabby", "Glamorous", "Gorgeous", "Handsome", "Long", "Magnificent", "Muscular", "Plain", "Plump", "Quaint", "Scruffy", "Shapely", "Short", "Skinny", "Stocky", "Ugly", "Unkempt", "Unsightly"];

var username = "";
var usernameAltered = false;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function generateUsername() {
    var animal = animals[Math.floor(Math.random() * animals.length)];
    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    return adjective + animal;
}

function getColour(code) {
    return firebase.database().ref("/chats/" + code + "/colour").once("value").then(function(snapshot) {
        var colour = snapshot.val()
        
        if (colour == "red") { document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255, 100, 100)"; }
        else if (colour == "green") { document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(100, 255, 100)"; }
        else if (colour == "blue") { document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(100, 100, 255)"; }
        else if (colour == "yellow") { document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255, 255, 100)"; }
    });    
}

function resetColour() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(200, 200, 200)";
}

if (window.location.href.split("/")[window.location.href.split("/").length - 1] == "index.html") {
    document.getElementById("username").value = generateUsername();
    document.getElementById("code").autofocus = true;
} else {
    if (getURLParameter("code") == null) { window.location.href = "index.html" }

    if (getURLParameter("username") == null) { username = generateUsername() } else (username = getURLParameter("username"))

    document.getElementById("codeCorner").value = getURLParameter("code");
    document.getElementById("chatInput").autofocus = true;

    getColour(getURLParameter("code"));

    var input = document.getElementById("chatInput");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("chatInput").value = "";
        }
    });
}