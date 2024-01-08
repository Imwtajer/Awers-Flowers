const cartSide = document.querySelector(".tvc")
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")
if (cartStorage.length) {
    cartStorage.forEach(el => {
        const {title, price} = el
        const newCard = document.createElement("div")
        newCard.className = "tovar1"
        newCard.innerHTML = `<p class="tovarname">${title}</p> <p class="cena">${price}</p>`
        cartSide.appendChild(newCard)
    });
}