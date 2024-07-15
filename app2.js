// Define an array to store cart items
let cart = [];

// Function to handle adding items to the cart
function addToCart(itemName, itemPrice) {
  let item = {
    name: itemName,
    price: itemPrice
  };
  cart.push(item);
  updateCart(); // Update the displayed cart
}

// Function to update the displayed cart
function updateCart() {
  let cartContents = document.getElementById('cartContents');
  cartContents.innerHTML = ''; // Clear previous contents

  cart.forEach(item => {
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
    `;
    cartContents.appendChild(cartItem);
  });

  updateTotal(); // Update the total price
}

// Function to update the total price
function updateTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price;
  });

  let totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Function to handle checkout
function checkout(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  let fullName = document.getElementById('fullName').value.trim();
  let email = document.getElementById('email').value.trim();
  let address = document.getElementById('address').value.trim();
  let cardNumber = document.getElementById('cardNumber').value.trim();
  let expiryDate = document.getElementById('expiryDate').value.trim();
  let cvv = document.getElementById('cvv').value.trim();

  // Validate form fields
  if (fullName === '' || email === '' || address === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Validate card number (simplified validation for demo purpose)
  if (!isValidCardNumber(cardNumber)) {
    alert('Invalid card number. Please enter a valid card number.');
    return;
  }

  // Validate expiry date (simplified validation for demo purpose)
  if (!isValidExpiryDate(expiryDate)) {
    alert('Invalid expiry date. Please enter a valid expiry date in MM/YY format.');
    return;
  }

  // Calculate total price
  let total = 0;
  cart.forEach(item => {
    total += item.price;
  });

  // Display order summary (replace with actual payment integration)
  alert(`Order Summary:\n\nFull Name: ${fullName}\nEmail: ${email}\nAddress: ${address}\nTotal Price: $${total.toFixed(2)}\n\nPayment Successfully Submitted!`);

  // Optionally, you can reset the cart and/or redirect to a thank you page
  // Reset cart
  cart = [];
  updateCart(); // Update the displayed cart after clearing

  // Reset form fields (if needed)
  document.getElementById('fullName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('address').value = '';
  document.getElementById('cardNumber').value = '';
  document.getElementById('expiryDate').value = '';
  document.getElementById('cvv').value = '';
}

// Function to validate card number (simplified validation for demo purpose)
function isValidCardNumber(cardNumber) {
  // Check for a 16-digit number (in a real scenario, you would use a more robust validation)
  return /^\d{16}$/.test(cardNumber);
}

// Function to validate expiry date (simplified validation for demo purpose)
function isValidExpiryDate(expiryDate) {
  // Check for MM/YY format (in a real scenario, you would check if the date is valid and not expired)
  return /^\d{2}\/\d{2}$/.test(expiryDate);
}
