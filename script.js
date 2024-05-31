console.log("Hello world")
document.querySelector(".hamburger").addEventListener("click",()=>{
    const navv = document.querySelector(".renavbar")
    const ham = document.querySelector(".close")
    navv.style.display ="block"
})
document.querySelector(".close").addEventListener("click",()=>{
    const navv = document.querySelector(".renavbar")
    navv.style.display ="none"
})