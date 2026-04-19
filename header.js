// header.js
const headerHTML = `
<style>
  header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    padding: 0 5%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(10,10,15,0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    transition: background 0.3s;
  }
  .logo {
    font-family: var(--font-head);
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
  }
  nav { display: flex; align-items: center; gap: 2rem; }
  nav a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: color 0.2s;
    position: relative;
  }
  nav a:hover { color: var(--text); }
  .nav-cta {
    background: var(--accent);
    color: #fff !important;
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    font-weight: 600 !important;
    font-size: 0.85rem !important;
  }
</style>

<header id="site-header">
  <a href="/" class="logo">FeedPreview</a>
  <nav id="main-nav">
    <a href="#tools">Tools</a>
    <a href="#features">Features</a>
    <a href="#faq">FAQ</a>
    <a href="#hero" class="nav-cta">Try Now</a>
  </nav>
  <div class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</header>
`;

document.write(headerHTML);

// Scroll Style Logic
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (header) {
    header.style.background = window.scrollY > 40 ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.8)';
  }
});
