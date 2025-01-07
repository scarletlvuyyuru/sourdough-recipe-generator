function generateForm(event) {
    event.preventDefault();
let apiKey = "61e11tf2503b89498d076obf6bbaf870";
let prompt = "What are sourdough recipes using this topic";
let context = "Provide example the the following format: Ingredients, Instructions";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`



    new Typewriter("#recipe", { 
        strings: "Searching for a good recipe...",
        autoStart: true,
        delay: 1,
        cursor: "", 
    });
}

let textForFormElement= document.querySelector("#textForForm");
textForFormElement.addEventListener("submit", generateForm); 

