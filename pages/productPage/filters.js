const filtersCTA = document.querySelector("#filters-cta-button");
const sidebar = document.querySelector("#sidebar");
const filtersBackBtn = document.querySelector("#filterbackBtn");



filtersCTA.addEventListener("click", () => {
    sidebar.classList.add("db");
    filtersCTA.classList.add("dn");
})

filtersBackBtn.addEventListener("click", () => {
    sidebar.classList.remove("db");
    filtersCTA.classList.remove("dn");
})

