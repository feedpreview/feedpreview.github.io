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

<footer role="contentinfo">
  <div class="footer-grid">
    <div class="footer-brand">
      <a class="logo" href="/">FeedPreview</a>
      <p>The free social media post preview tool for creators, marketers, and brands who want to perfect every post before publishing.</p>
      <div class="social-links" aria-label="Social media links">        
        <a href="https://github.com/feedpreview/feedpreview.github.io" class="social-link" aria-label="GitHub">⌥</a>
      </div>
    </div>

    <div class="footer-widget">
      <h4>Popular Tools</h4>
      <ul>
        <li><a href="instagram-post-preview">Instagram Post Preview</a></li>
        <li><a href="fb-post-preview">Facebook Post Preview</a></li>
        <li><a href="x-post">Twitter / X Post Preview</a></li>
        <li><a href="linkedin-post-preview">LinkedIn Post Preview</a></li>
        <li><a href="tiktok-post-preview">TikTok Post Preview</a></li>
        <li><a href="youtube-post-preview">YouTube Post Preview</a></li>
      </ul>
    </div>

    <div class="footer-widget">
      <h4>Resources</h4>
      <ul>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#features">Features</a></li>        
        <li><a href="blog">Blog</a></li>        
      </ul>
    </div>

    <div class="footer-widget">
      <h4>Legal</h4>
      <ul>
        <li><a href="privacy">Privacy Policy</a></li>
        <li><a href="terms">Terms of Service</a></li>
        <li><a href="cookie">Cookie Policy</a></li>
        <li><a href="contact">Contact Us</a></li>
        <li><a href="sitemap.xml">Sitemap</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2026 <a href="/">FeedPreview</a>. Free social media preview tools.</p>
    <p>Made with ♥ for creators everywhere</p>
  </div>
</footer>
`;

document.write(footerHTML);
