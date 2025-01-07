function generateForm(event) {
    event.preventDefault();
    new Typewriter("#recipe", { 
        strings: "Searching for a good recipe...",
        autoStart: true,
        delay: 1,
        cursor: "", 
    });
}

let textForForm = document.querySelector("#textForForm");
textForFormElement.addEventListener("submit", generateForm); 

