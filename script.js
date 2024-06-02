console.log("Hello world")

document.querySelector(".hamburger").addEventListener("click",()=>{
    const nav = document.querySelector(".navbar")
    nav.style.display ="block"
    console.log("done")
})
document.querySelector(".close").addEventListener("click",()=>{
    const nav = document.querySelector(".navbar")
    nav.style.display ="none"
})
