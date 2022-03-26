const loginModalCTA = document.querySelector("#loginModalCTABtn");
const loginModal = document.querySelector("#login");
const loginmodalCloseBtn = document.querySelector("#loginCloseBtn");


loginModalCTA.addEventListener("click", ()=>{
    loginModal.classList.add("active");
    document.body.style.overflow = "hidden"
})

loginmodalCloseBtn.addEventListener("click", ()=>{
    loginModal.classList.remove("active");
    document.body.style.overflow = "visible";
})
