// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtns = document.querySelectorAll('.burger-order');


eatBtns.forEach(function(button) {

    button.addEventListener('click', function(event) {
        event.preventDefault();

        const devoured = button.getAttribute('data-devoured');
        const id = button.getAttribute('data-id');

        fetch(`/api/burger/${id}`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              devoured: devoured,
            }),
        }).then(() => {
            location.reload();
        }).catch(error => console.log('❌ Error', error));
        
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
        console.log(`res from script.js 35: ${res}`);
        // reload page on add
        location.reload();
    }).catch(error => console.log('❌ Error', error));

}); // Order Burger