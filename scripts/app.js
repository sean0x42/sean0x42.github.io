
/**
 * A vanilla version of JQuery's .ready() function.
 *
 * @param func Function to execute on page load.
 */
function ready (func) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        func();
    } else {
        document.addEventListener("DOMContentLoaded", func);
    }
}


/**
 * Executed when the DOM is ready.
 */
ready(function () {

    var adjectives = [
        "rusty",
        "valiant",
        "rainbow",
        "beautiful",
        "adorable",
        "elegant",
        "glistening",
        "bashful",
        "grumpy",
        "chubby",
        "honourable",
        "noteworthy",
        "graceful",
        "considerate",
        "honest",
        "omnipotent",
        "tender",
        "compassionate",
        "cowardly",
        "isolated",
        "misplaced",
        "ancient",
        "slippery"
    ];

    var nouns = [
        "duck",
        "octopus",
        "snake",
        "berry",
        "fork",
        "spork",
        "sausage",
        "grandpa",
        "grandma",
        "spaghetti",
        "squid",
        "melon",
        "hero",
        "baseball",
        "cucumber",
        "axolotl"
    ];

    var text, reload;


    /**
     * Generates a random message.
     */
    var roll = function () {

        text.innerHTML = randomItem(adjectives) + " " + randomItem(nouns);

    };


    /**
     * Gets a random item from the given array.
     *
     * @param items Array of items.
     * @return A random item from the array.
     */
    var randomItem = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };


    // Get elements\
    text   = document.querySelector(".text");
    reload = document.querySelector(".reload");

    reload.addEventListener("click", roll);

    roll();

});