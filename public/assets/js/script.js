// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtn = document.getElementById('eat-btn');

// Order the burger and add to burgers list
orderBtn.addEventListener('click', event => {
    event.preventDefault();

    const burgerOrdered = burgerOrder.value;
    console.log(`${burger} ordered!`) 

    fetch('/api/burger', {
        method: 'POST',
        body: {
          burger_name: burgerOrdered,
          devoured: false,
        }
    });
});