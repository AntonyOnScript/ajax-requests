const responseField = document.querySelector(".response-field")

function response(object) {

    const xhr = new XMLHttpRequest()
    xhr.open(object.method, object.url, true)
    xhr.send()

    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            object.success(xhr.responseText)
        } else {
            object.error(xhr.statusText)
        }
    }

}

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

    let object = {
        "url": href,
        "method": "GET",
        success(html) {
            textRender(html)
        },
        error(error) {
            console.log('An error has occurred: '+error)
        }
    }

    response(object)

}

function textRender(html) {
    responseField.innerHTML = html
}