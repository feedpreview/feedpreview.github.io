/**
 * FeedPreview - Main JavaScript Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initNewsletterForms();
  initToolCards();
  initLazyImages();
});

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Handle newsletter form submissions
 */
function initNewsletterForms() {
  const forms = document.querySelectorAll('form[id*="newsletter"]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      
      // Simulate submission (replace with actual API call)
      showNotification('Thanks for subscribing! 🎉', 'success');
      form.reset();
      
      // Optional: Send to backend
      // sendNewsletterSignup(email);
    });
  });
}

/**
 * Add interactive hover effects to tool cards
 */
function initToolCards() {
  const cards = document.querySelectorAll('.tool-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
}

/**
 * Lazy load images with Intersection Observer
 */
function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // Native lazy load supported
  
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  images.forEach(img => {
    if (img.dataset.src) {
      observer.observe(img);
    }
  });
}

/**
 * Show notification message
 * @param {string} message - Message to display
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
      <span>${message}</span>
    </div>
  `;
  
  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: type === 'success' ? '#10b981' : '#ef4444',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: '9999',
    animation: 'slideIn 0.3s ease',
    maxWidth: '350px'
  });
  
  document.body.appendChild(notification);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  .notification-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .notification-icon {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
document.head.appendChild(style);

/**
 * Example: Send newsletter signup to backend (placeholder)
 * @param {string} email - User email
 */
async function sendNewsletterSignup(email) {
  try {
    // Replace with your actual endpoint
    // await fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
    console.log('Newsletter signup:', email);
  } catch (error) {
    console.error('Newsletter submission failed:', error);
    showNotification('Something went wrong. Please try again.', 'error');
  }
}
