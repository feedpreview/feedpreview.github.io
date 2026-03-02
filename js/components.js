/**
 * Component Loader - Loads header and footer HTML files
 */
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('/header.html', 'header-container');
  loadComponent('/footer.html', 'footer-container');
  
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/**
 * Load external HTML component into a container
 * @param {string} filePath - Path to HTML file
 * @param {string} containerId - ID of target container
 */
async function loadComponent(filePath, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    container.innerHTML = await response.text();
    
    // Initialize mobile menu after header loads
    if (containerId === 'header-container') {
      initMobileMenu();
    }
  } catch (error) {
    console.error('Component load error:', error);
    container.innerHTML = `<p style="color:#e1306c">Error loading component</p>`;
  }
}

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');
  
  if (!toggle || !nav) return;
  
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
