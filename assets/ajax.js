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

    axios(href).then(response => textRender(response.data)).catch(e => console.error("An error has occurred: "+e))
    
}

function textRender(html) {
    responseField.innerHTML = html
}