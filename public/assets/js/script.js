// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtn = document.getElementById('eat-btn');

// Order the burger and add to burgers list
orderBtn.addEventListener('click', event => {
    event.preventDefault();

    const burger = burgerOrder.value;
    console.log(`${burger} ordered!`) 

    fetch('/api/burger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          buger_name: burger,
          devoured: false,
        }
    });
});