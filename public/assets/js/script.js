// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtn = document.getElementById('eat-btn');

// Order the burger and add to burgers list
orderBtn.addEventListener('click', (event) => {

    console.log(burgerOrder.value);
    event.preventDefault();

    fetch('/api/burger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json/',
        },
        body: JSON.stringify({
          burger_name: burgerOrder.value,
          devoured: false,
        })
    });
});