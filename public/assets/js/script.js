// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtn = document.getElementById('eat-btn');

// Event listeners
orderBtn.addEventListener('click', orderBurger);
eatBtn.addEventListener('click', eatDaBurger);

// Order the burger and add to burgers list
function orderBurger() {
    const burger = burgerOrder.value;
    console.log(`ordered!`)  
}; 

// Eat burger and move to devoured
function eatDaBurger() {
    console.log('✅ Burger Devoured!')
};