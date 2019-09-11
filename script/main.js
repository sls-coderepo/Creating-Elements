const articleContainer = document.querySelector("#messages")

let textMessages = ["Are we doing fireworks this year?",  "After last year's 'tree incident', should we?", "The fire fighters put it out in like a minute. Wasn't even a real fire.", "We can set them off in the street.", "Our neighbors' houses are flammable, too"]

textMessages.forEach(text => {
    const section = document.createElement("section")
    section.className = "message"
    section.innerHTML = text
    articleContainer.appendChild(section)

})



