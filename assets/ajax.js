const responseField = document.querySelector(".response-field")

function response(object) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()
        xhr.open(object.method, object.url, true)
        xhr.send()

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        }

    })
    
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

async function linkHandler(href) {

    let object = {
        "url": href,
        "method": "GET"
    }
    
    try {
        const responseHTML = await response(object)
        textRender(responseHTML)
    } catch (e) {
        console.log(e)
    }
    
}

function textRender(html) {
    responseField.innerHTML = html
}