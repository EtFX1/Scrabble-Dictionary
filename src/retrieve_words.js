//function that retrieves the scrabble words from "dictionary.txt" and returns it as a list
export async function getWordData() {

    try {
        const responseObject = await fetch("../dictionary-words.txt"); //returns response object 
        const words = await responseObject.text(); //returns words as a string

        const array = words.split("\n"); //splitting the data into a list
        return array;
    }

    catch (error) {
        console.log(error);
    }
}








