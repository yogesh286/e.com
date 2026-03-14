function Footer() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <h4>ePower Studio</h4>
            <p>Curated fashion, beauty & home picks for everyday style.</p>
          </div>
          <div className="footer-col">
            <h5>CONSUMER POLICY</h5>
            <ul>
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
              <li>FSSAL Food Safety</li>
              <li>Connect App</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>ABOUT</h5>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>E-power stories</li>
              <li>Press</li>
              <li>Coporate Information</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>SOCAL</h5>
            <ul className="footer-social">
              <a href="https://www.instagram.com/hack_hut1307/?hl=en"><li>Instagram</li></a>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ePower Studio. All rights reserved.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;