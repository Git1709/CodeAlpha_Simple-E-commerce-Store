document.addEventListener('DOMContentLoaded', () => {
    const checkoutCartContainer = document.getElementById('checkout-cart');
    const subtotalElement = document.getElementById('subtotal');
    const proceedButton = document.getElementById('proceed');
  
    // Simulated cart data (in practice, fetch from a backend or local storage)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
  
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <p>Quantity: 1</p>
      `;
      checkoutCartContainer.appendChild(cartItem);
      subtotal += item.price;
    });
  
    subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  
    proceedButton.addEventListener('click', () => {
      alert('Proceed to buy - Not Implemented');
    });
  });
  