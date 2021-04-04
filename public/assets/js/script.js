// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtn = document.getElementById('eat-btn');

// Order the burger and add to burgers list
orderBtn.addEventListener('click', (event) => {
    console.log(`${burgerOrder.value} ordered!`);

    event.preventDefault();
    // fetch request is promise based, need to use async await, .then or .catch
    fetch('/api/burger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          burger_name: burgerOrder.value,
          devoured: false,
        }),
    }).then(res => {return res.json()
    }).then(data => {console.log(data)
    }).catch(error => console.log('❌ Error'));

}); // Order Burger