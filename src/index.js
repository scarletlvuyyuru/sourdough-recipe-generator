
function displayRecipe(response) {
    
        new Typewriter("#recipe", { 
            strings: "Searching for a good recipe...",
            autoStart: true,
            delay: 1,
            cursor: "", 
        });

}


function generateForm(event) {
    event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "61e11tf2503b89498d076obf6bbaf870";
let prompt = `User Instructions: What are sourdough recipes for ${instructionsInput.value}`;
let context = "You are a pastry chef teaching first time sour dough makers different recipes they can do with the active sourdough. Make sure to follow user instructions. ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`

console.log(`prompt : ${prompt}`);
axios.get(apiUrl).then(displayRecipe);
}

let textForFormElement= document.querySelector("#textForForm");
textForFormElement.addEventListener("submit", generateForm); 

