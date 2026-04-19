// footer.js
const footerHTML = `
<style>
  footer {
    background: var(--bg2);
    border-top: 1px solid var(--border);
    padding: 60px 5% 30px;
    color: var(--text);
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }
  .footer-brand .logo { font-size: 1.4rem; margin-bottom: 0.75rem; display: inline-block; }
  .footer-brand p { color: var(--muted); font-size: 0.88rem; line-height: 1.7; max-width: 280px; }
  .social-links { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
  .social-link {
    width: 36px; height: 36px;
    border-radius: 10px;
    background: rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: center;
    color: var(--muted); text-decoration: none;
  }
  .footer-widget h4 {
    font-family: var(--font-head);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  .footer-widget ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
  .footer-widget a { color: var(--muted); text-decoration: none; font-size: 0.88rem; }
  .footer-bottom {
    border-top: 1px solid var(--border);
    padding-top: 1.5rem;
    display: flex; justify-content: space-between;
    font-size: 0.82rem; color: var(--muted);
  }
</style>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="/" class="logo">FeedPreview</a>
      <p>The ultimate toolkit for social media managers and creators to preview content before it goes live.</p>
      <div class="social-links">
        <a href="#" class="social-link">TW</a>
        <a href="#" class="social-link">IG</a>
        <a href="#" class="social-link">LI</a>
      </div>
    </div>
    <div class="footer-widget">
      <h4>Tools</h4>
      <ul>
        <li><a href="/instagram">Instagram Preview</a></li>
        <li><a href="/facebook">Facebook Preview</a></li>
        <li><a href="/tiktok">TikTok Preview</a></li>
      </ul>
    </div>
    <div class="footer-widget">
      <h4>Company</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/blog">Resources</a></li>
        <li><a href="/contact">Support</a></li>
      </ul>
    </div>
    <div class="footer-widget">
      <h4>Legal</h4>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 FeedPreview. All rights reserved.</p>
    <div>
      <a href="#">Status</a> &bull; <a href="#">Sitemap</a>
    </div>
  </div>
</footer>
`;

document.write(footerHTML);
