document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products');
  const cartItemsContainer = document.getElementById('cart-items');
  const checkoutButton = document.getElementById('checkout');
  let cart = [];

  // Fetch products from the backend
  fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price}</p>
          <button data-id="${product._id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
      });

      // Add event listeners to "Add to Cart" buttons
      productsContainer.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', addToCart);
      });
    });

  // Add product to cart
  function addToCart(event) {
    const productId = event.target.getAttribute('data-id');
    fetch(`http://localhost:5000/api/products`)
      .then(response => response.json())
      .then(products => {
        const product = products.find(p => p._id === productId);
        cart.push(product);
        renderCart();
        localStorage.setItem('cart', JSON.stringify(cart));
      });
  }

  // Render the shopping cart
  function renderCart() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItemsContainer.appendChild(cartItem);
    });
  }

  // Handle checkout
  checkoutButton.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });
});
