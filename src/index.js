
function displayRecipe(response) {
    
        new Typewriter("#recipe", { 
            strings: response.data.answer,
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
let context = "You are a pastry chef teaching recipes to make with active sourdough starter. Provide the ingredient list and steps in basic HTML, seperating each line with a <br />> to make the user instructions simple and easy to follow. Remove ```html title from top margin.Make sure to follow user instructions for the recipe. ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement= document.querySelector("#recipe");
recipeElement.innerHTML=`<div class="generating"> ⏳Generating a recipe about ${instructionsInput.value} 🪄</div>`;



axios.get(apiUrl).then(displayRecipe);
}

let textForFormElement= document.querySelector("#textForForm");
textForFormElement.addEventListener("submit", generateForm); 

