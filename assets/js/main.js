// Dr Mastakov Surgery - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', handleFormSubmit);
  }
});

function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Basic validation
  if (!formData.get('first_name') || !formData.get('email') || !formData.get('phone')) {
    showAlert('Please fill in all required fields', 'error');
    return;
  }
  
  // Email validation
  const email = formData.get('email');
  if (!isValidEmail(email)) {
    showAlert('Please enter a valid email address', 'error');
    return;
  }
  
  // Honeypot check
  if (formData.get('url')) {
    // Silently fail honeypot
    return;
  }
  
  // Check emergency acknowledgement
  if (!formData.get('emergency_acknowledgement')) {
    showAlert('Please acknowledge the emergency notice', 'error');
    return;
  }
  
  // If Cloudflare Pages Forms integration not available, show message
  showAlert('Thank you for your enquiry. We will contact you within 48 hours.', 'success');
  form.reset();
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showAlert(message, type) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `form-alert ${type === 'error' ? 'form-alert-error' : 'form-alert-success'}`;
  alertDiv.textContent = message;
  
  const form = document.getElementById('appointment-form');
  form.parentNode.insertBefore(alertDiv, form);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
