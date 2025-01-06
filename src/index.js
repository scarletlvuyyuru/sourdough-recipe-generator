function generateForm(event)
{
    event.preventDefault();
    alert("Generating Ideas...");
}

let textForForm = document.querySelector("#text-for-form");
textForFormElement.addEventListener("submit", generateForm); 

