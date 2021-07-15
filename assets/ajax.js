const responseField = document.querySelector(".response-field")

document.addEventListener('click', checkBodyElement)

function checkBodyElement(e) {

    let element = e.target  
    let tag = element.tagName

    if(tag.toLowerCase() === 'a') {
        e.preventDefault()

        let href = element.getAttribute('href')
        linkHandler(href)
    }

}

function linkHandler(href) {

    fetch(href)
    .then(response => response.text())
    .then(html => textRender(html))
    .catch(e => console.error("An error has occurred: "+e))
    
}

function textRender(html) {
    responseField.innerHTML = html
}