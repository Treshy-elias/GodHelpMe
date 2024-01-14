const img = document.querySelector(".img")
const forwardBtn = document.querySelector('.front-btn')
const backBtn = document.querySelector('.back-btn')

let images = ["node.png", "php.png", "python.png", "csharp.png", "scala.png", "ruby.png", "html5.png", "javascript.png"]
let imgTextArray = ["Node.js", "Php", "Python", "Csharp",  "Scala", "Ruby", "Html5", "Javascript" ]
let imgTextPick = 0
let pick = 0
let pic = document.createElement("img")
pic.classList.add("card2")


pic.setAttribute("src", `images/${images[pick]}`)
img.appendChild(pic)

let imgText = document.createElement('div')
imgText.classList.add('img-text2')

imgText.innerText = "node.js"

img.appendChild(imgText)

forwardBtn.addEventListener('click', () => {
    if (pick < 7) {
        pick += 1
        imgTextPick += 1

        console.log(pic)
        pic.setAttribute("src", `images/${images[pick]}`)
    
        img.appendChild(pic)

        imgText.innerText = imgTextArray[imgTextPick]

        img.appendChild(imgText)
        
        
    }
    if (pick >= 7) {
        pick = -1
    }

    if (imgTextPick >= 7) {
        imgTextPick = -1
    }
   
})



backBtn.addEventListener('click', () => {
    if (pick > 0) {
    pick -= 1
    imgTextPick -= 1

    console.log(pic)
    pic.setAttribute("src", `images/${images[pick]}`)

    img.appendChild(pic)
    }

    imgText.innerText = imgTextArray[imgTextPick]

    img.appendChild(imgText)
})


const cyan = document.querySelector("#cyan")
const white = document.querySelector("#white")
const navbar = document.querySelector(".navbar")
const language = document.querySelector(".languages")
const footer = document.querySelector("footer")
const showcaseForm = document.querySelector(".showcase-form")

cyan.addEventListener("click", () => {
    navbar.style.background = "var(--secondary-color)"
    language.style.background = "var(--secondary-color)"
    document.body.style.background = "var(--body-color)"
    footer.style.background = "var(--secondary-color)"
    showcaseForm.style.background = "linear-gradient(to bottom, cyan, rgb(0, 66, 66))" 
})
white.addEventListener("click", () => {
    navbar.style.background = "var(--primary-color)"
    document.body.style.background = "#fff"
    language.style.background = "rgba(89, 80, 212, 0.288)"
    footer.style.background = "var(--primary-color)"
    showcaseForm.style.background = "#fff"
})
// pic.style.background =  `url(images/${images[pick]}) no-repeat center center/cover`










let introLogo = document.querySelectorAll(".introLogo")
let logoHeader = document.querySelector(".logo-header")

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        introLogo.forEach((introLogo, i) => {


            setTimeout(() => {
                introLogo.classList.add("active")
            
                setTimeout(() => {
                    introLogo.classList.add("inactive")
                    
                    setTimeout(() => {
                        logoHeader.style.display = "none"
                        
                    }, 2000)

                }, 2000)
            
            
        }, (i + 1) * 400)
        })
   
        
    })
})
    