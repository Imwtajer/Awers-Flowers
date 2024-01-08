const cards = document.querySelectorAll(".tovartext")
cards.forEach((el, idx) => {
    //console.dir(el)
    const btn = el.childNodes[7]
    const title = el.childNodes[1].innerText
    const price = el.childNodes[5].innerText
    btn.addEventListener("click", () => {
        const cartStorage = localStorage.getItem("cart") || "[]"
        const cart = JSON.parse(cartStorage)
        const card = { title, price }
        localStorage.setItem("cart", JSON.stringify([...cart, card]))
        alert("Товар добавлен в корзину")
    })
})




//console.log(cards)
