const wishListBtn = document.q("fav-icon");


// wishListBtn.addEventListener("mouseover", ()=>{
//     span.textContent = 'favorite';
//     span.innerHTML = `<span class="material-icons-outlined">
// favorite
// </span>`;
// })
wishListBtn.onmouseover = function() {mouseOver()};
wishListBtn.onmouseout = function() {mouseOut()};
function mouseOver() {
    span.textContent = 'favorite';
    wishListBtn.style.color = "red";
  }
  
  function mouseOut() {
    wishListBtn.style.color = "black";
  }

// wishListBtn.addEventListener("click", ()=>{
//     span.textContent = 'favourite';
// })

