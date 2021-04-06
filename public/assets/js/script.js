// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtns = document.querySelectorAll('.burger-order');


eatBtns.forEach(button => {
    console.log(button)
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const devoured = button.getAttribute('data-devoured');
        console.log(devoured);
        
    })
});


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
    }).then(res => {
        console.log(res);
        // reload page on add
        location.reload();
    }).catch(error => console.log('❌ Error', error));

}); // Order Burger