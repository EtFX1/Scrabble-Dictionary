
const wordInput = document.querySelector(".search-box").value;
console.log(wordInput);


//? making a post request to the server that processes the word
//! Sending the word the user types to the server for processing 

function sendWordToServer() {

    fetch("Javascript/handle_api_keys.mjs", {

        method: "POST",

        //? telling fetch that we want to send JSON
        headers: {
            "Content-Type": "application/json"
        },

        //? convert the "body" object that we are sending to a JSON string
        body: JSON.stringify({ wordInput: wordInput })
    })
        .then((res) => {
            if (res.ok) {
                console.log("POST request was accepted");
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.log("ERROR in making post request");
        })

}

sendWordToServer();

