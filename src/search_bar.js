import { getWordData } from './retrieve_words.js';

const form = document.querySelector("form");
const searchBox = document.querySelector(".search-box");
const suggestionsCont = document.querySelector(".suggestions-cont");

//function that displays search suggestions when the user starts typing
searchBox.onkeyup = async function () {

    suggestionsCont.classList.remove("display-none"); //makes the box visible

    // returns the actual list of words 
    const listOfWords = await getWordData().then(words => words);

    let filteredList = []; // to store all the filtered keywords
    let input = searchBox.value.toLowerCase(); // to store user input

    // if statement to check whether there's anything in the search box before filtering can begin
    if (input.length) {

        //filter function filters the list of words by the characters typed
        filteredList = listOfWords.filter((characters_typed) => {
            //returns true if the "character_typed" starts with the input
            const inWord = characters_typed.toLowerCase().startsWith(input);
            return inWord;
        });
    }

    const trimmedList = filteredList.slice(0, 5); // only storing the first 5 words from the list

    //converts each list element in the "filteredList" into an html list item 
    function convertToHTML(trimmedList) {

        //the map function takes every word in the "filteredList" and converts it to the HTML seen below
        const listItems = trimmedList.map((word) => {
            return `<li><span class="search-suggestion left-0">${word}</span></li>`;
        });
        suggestionsCont.innerHTML = `<ul class="search-suggestions">${listItems.join("")}</ul>`;
    }

    convertToHTML(trimmedList);
}


form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the page from reloading
    console.log("submitted");
});

// remves the search box when it's out of focus
searchBox.addEventListener("blur", function () {
    suggestionsCont.classList.add("display-none");
});








