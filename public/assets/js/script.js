// Input and buttons
const burgerOrder = document.getElementById('burger-order');
const orderBtn = document.getElementById('order-btn');
const eatBtns = document.querySelectorAll('.burger-order');

// Loop through to add click event to each button
eatBtns.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Id from each button
    const id = button.getAttribute('data-id');

    // Handlebars will set the new state automatically on render
    const newState = button.getAttribute('data-devoured');

    fetch(`/api/burger/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          devoured: newState,
        }),
      }).then(() => {
      // reaload page
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    // eslint-disable-next-line no-console
    }).catch((error) => console.log('❌ Error', error));
  });
});

// Order the burger and add to burgers list
orderBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // fetch request is promise based, need to use async await, .then or .catch
  fetch('/api/burger', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      burger_name: burgerOrder.value,
      devoured: false,
    }),
  }).then(() => {
    // reload page on add
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  // eslint-disable-next-line no-console
  }).catch((error) => console.log('❌ Error', error));
}); // Order Burger
