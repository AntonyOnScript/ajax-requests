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

async function linkHandler(href) {

    try {

        const response = await fetch(href)
        const html = await response.text()
    
        textRender(html)    

    } catch(e) {
        console.error("An error has occurred: "+e)
    }
}

function textRender(html) {
    responseField.innerHTML = html
}