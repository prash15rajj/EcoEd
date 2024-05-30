// Set your publishable key
var stripe = Stripe('your-publishable-key');

// Create an instance of elements
var elements = stripe.elements();

// Create an instance of the card Element
var card = elements.create('card');

// Add an instance of the card Element into the `card-element` div
card.mount('#card-element');

// Handle form submission
var form = document.getElementById('donation-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Disable the submit button to prevent multiple submissions
  document.getElementById('submit-donation').disabled = true;

  // Create payment method
  stripe.createPaymentMethod({
    type: 'card',
    card: card,
    billing_details: {
      // Include relevant billing details
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
    }
  }).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
      // Enable the submit button again
      document.getElementById('submit-donation').disabled = false;
    } else {
      // Insert the payment method ID into the form so it gets submitted to the server
      var hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'paymentMethodId');
      hiddenInput.setAttribute('value', result.paymentMethod.id);
      form.appendChild(hiddenInput);
      // Submit the form
      form.submit();
    }
  });
});
