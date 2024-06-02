document.querySelector(".rhamburger").addEventListener("click",()=>{
    const navv = document.querySelector(".renavbar")
    const ham = document.querySelector(".close")
    navv.style.display ="block"
})
document.querySelector(".rclose").addEventListener("click",()=>{
    const navv = document.querySelector(".renavbar")
    navv.style.display ="none"
})