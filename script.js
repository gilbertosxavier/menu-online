const menu = document.getElementById('menu')
const cartBtn = document.getElementById('cart-btn')
const cartModal = document.getElementById('cart-modal')
const cartItemsContainer = document.getElementById('cart-items')
const cartTotal = document.getElementById('cart-total')
const checkoutBtn = document.getElementById('checkout-btn')
const closeModalBtn = document.getElementById('close-modal-btn')
const cartCounter = document.getElementById('cart-cout')
const addressInput = document.getElementById('address')
const addresWarn = document.getElementById('address-warn')

//abrir modal do carrinho
cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

//fechar modal do carrinho clicando fora
cartModal.addEventListener("click", function(e) {
    if(e.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//fechando modal pelo btn fechar
closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

//adicionando produtos ao carrinho
menu.addEventListener("click", function(e) {

    let parentButton = e.target.closest(".add-to-cart-btn")

    if(parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
    }
})

//funcção para adicionar ao carrinho