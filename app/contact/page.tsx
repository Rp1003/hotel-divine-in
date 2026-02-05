import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hotel Divine Inn",
  description: "Get in touch with Hotel Divine Inn. Find our location, phone number, and book your stay.",
};

export default function ContactPage() {
  return (
    <main className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="container">
          <div className="page-header-content fade-in-up">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">We&apos;re here to help you</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid fade-in-up">
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3>Visit Us</h3>
              <p>BHADRAKALI CHAWK, behind DR. AMBEDKAR STATUE</p>
              <p>Dwarka, Gujarat 361335</p>
              <p>India</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+91 9974089159</p>
              <p>Available 24/7</p>
              <a href="tel:+919974089159" className="contact-link">Click to Call</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <h3>WhatsApp</h3>
              <p>Quick and Easy Booking</p>
              <p>Instant Confirmation</p>
              <a 
                href="https://wa.me/message/RJJFT7WR7W3ME1" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@hoteldivineinn.com</p>
              <p>We&apos;ll respond within 24 hours</p>
              <a href="mailto:info@hoteldivineinn.com" className="contact-link">Send Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section location-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h4 className="section-subtitle">Find Us</h4>
            <h2 className="section-title">Our Location</h2>
            <p>Conveniently located in the heart of Dwarka</p>
          </div>
          <div className="map-container fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1234567890123!2d68.1234567890123!3d22.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569d62a740ebcd%3A0xbb462a364c474027!2sHotel%20Divine%20Inn%2C%20Dwarka%2C%20Gujarat%20361335!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Directions & Nearby */}
      <section className="section directions-section bg-light">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h4 className="section-subtitle">Getting Here</h4>
            <h2 className="section-title">How to Reach Us</h2>
          </div>
          
          <div className="directions-grid fade-in-up">
            <div className="direction-card">
              <div className="direction-icon">
                <i className="fa-solid fa-train"></i>
              </div>
              <h3>By Train</h3>
              <p><strong>Dwarka Railway Station</strong></p>
              <p>3 km from hotel (10 minutes by taxi)</p>
              <p>Auto-rickshaws and taxis available outside</p>
            </div>
            
            <div className="direction-card">
              <div className="direction-icon">
                <i className="fa-solid fa-plane"></i>
              </div>
              <h3>By Air</h3>
              <p><strong>Jamnagar Airport</strong></p>
              <p>130 km from hotel (2.5 hours by car)</p>
              <p>Private cabs can be arranged</p>
            </div>
            
            <div className="direction-card">
              <div className="direction-icon">
                <i className="fa-solid fa-car"></i>
              </div>
              <h3>By Road</h3>
              <p><strong>NH947</strong></p>
              <p>Well connected by state highways</p>
              <p>Parking available at hotel</p>
            </div>
          </div>

          <div className="nearby-places fade-in-up">
            <h3>Nearby Attractions</h3>
            <ul className="places-list">
              <li>
                <i className="fa-solid fa-place-of-worship"></i>
                <span><strong>Dwarkadhish Temple</strong> - 1.5 km (Walking distance)</span>
              </li>
              <li>
                <i className="fa-solid fa-water"></i>
                <span><strong>Gomti Ghat</strong> - 2 km (5 minutes)</span>
              </li>
              <li>
                <i className="fa-solid fa-landmark"></i>
                <span><strong>Beyt Dwarka</strong> - 30 km (45 minutes)</span>
              </li>
              <li>
                <i className="fa-solid fa-umbrella-beach"></i>
                <span><strong>Dwarka Beach</strong> - 3 km (10 minutes)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center fade-in-up">
            <h2>Ready to Book?</h2>
            <p>Contact us now for the best rates and instant confirmation</p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/message/RJJFT7WR7W3ME1" 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i> Book on WhatsApp
              </a>
              <a 
                href="tel:+919974089159" 
                className="btn-outline"
              >
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
