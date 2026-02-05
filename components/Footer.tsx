import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link href="/" className="logo footer-logo">
            Hotel Divine Inn<span className="dot">.</span>
          </Link>
          <p>Experience the difference with our premium hotel services in the heart of Dwarka.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/rooms">Rooms</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              BHADRAKALI CHAWK, behind DR. AMBEDKAR STATUE, Dwarka, Gujarat 361335
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+919974089159">+91 9974089159</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@hoteldivineinn.com">info@hoteldivineinn.com</a>
            </li>
            <li>
              <i className="fa-brands fa-whatsapp"></i>
              <a 
                href="https://wa.me/message/RJJFT7WR7W3ME1"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Hotel Divine Inn. All rights reserved.</p>
      </div>
    </footer>
  );
}
