const wantToRegister = document.querySelector("#wantToRegister");
const registerModal = document.querySelector("#register");
const userAlready = document.querySelector("#userAlready");
const registermodalCloseBtn = document.querySelector("#registerCloseBtn");

userAlready.addEventListener("click", () => {
    registerModal.classList.remove("active");
    loginModal.classList.add("active");
    document.body.style.overflow = "hidden";
})

wantToRegister.addEventListener("click", () => {
    loginModal.classList.remove("active");
    registerModal.classList.add("active");
    document.body.style.overflow = "hidden";
})

registermodalCloseBtn.addEventListener("click", ()=>{
    registerModal.classList.remove("active");
    document.body.style.overflow = "visible";
})
