//function that retrieves the scrabble words from the dictionary
async function getWordData() {

    try {
        const responseObject = await fetch("../dictionary-words.txt"); //returns Response object 
        const words = await responseObject.text(); //returns words as a string

        //todo: use a try catch block
        const array = words.split("\n"); //splitting the data into a list

        return Promise.resolve(array);
    }

    catch (error) {
        console.log(error);
    }
}

// retrieves
getWordData().then(array => console.log(array))








