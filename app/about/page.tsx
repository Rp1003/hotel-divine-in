import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hotel Divine Inn",
  description: "Learn about Hotel Divine Inn - your home away from home in Dwarka, Gujarat.",
};

export default function AboutPage() {
  return (
    <main className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="container">
          <div className="page-header-content fade-in-up">
            <h1 className="page-title">About Us</h1>
            <p className="page-subtitle">Your home away from home in Dwarka</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section about-section-full">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text fade-in-left">
              <h4 className="section-subtitle">Our Story</h4>
              <h2 className="section-title">Hotel Divine Inn Dwarka</h2>
              <p>
                Divine Inn was created with a simple idea in mind: to offer travelers a comfortable, 
                peaceful, and affordable stay in the sacred city of Dwarka. Whether visiting for 
                pilgrimage, family travel, or a quiet break by the sea, our hotel is designed to feel 
                welcoming from the moment you arrive.
              </p>
              <p>
                We focus on clean spaces, modern comforts, and warm hospitality, ensuring every guest 
                enjoys a stay that is relaxed, reliable, and great value. At Divine Inn, we believe a 
                good stay doesn&apos;t need to be expensive, it just needs to be thoughtful.
              </p>
            </div>
            <div className="about-image fade-in-right">
              <div className="placeholder-video">
                <div className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section bg-light">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h4 className="section-subtitle">What We Believe</h4>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card fade-in-up">
              <div className="value-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3>Hospitality</h3>
              <p>We treat every guest like family, ensuring warm and welcoming service throughout your stay.</p>
            </div>
            <div className="value-card fade-in-up" data-delay="100">
              <div className="value-icon">
                <i className="fa-solid fa-spray-can-sparkles"></i>
              </div>
              <h3>Cleanliness</h3>
              <p>Maintaining the highest standards of cleanliness and hygiene in all our rooms and facilities.</p>
            </div>
            <div className="value-card fade-in-up" data-delay="200">
              <div className="value-icon">
                <i className="fa-solid fa-dollar-sign"></i>
              </div>
              <h3>Value</h3>
              <p>Offering quality accommodation at honest, affordable prices without compromising on comfort.</p>
            </div>
            <div className="value-card fade-in-up" data-delay="300">
              <div className="value-icon">
                <i className="fa-solid fa-shield"></i>
              </div>
              <h3>Reliability</h3>
              <p>Consistent service and dependable amenities you can count on for every visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h4 className="section-subtitle">Why Us</h4>
            <h2 className="section-title">Why Choose Divine Inn?</h2>
          </div>
          
          <div className="features-list fade-in-up">
            <div className="feature-item">
              <i className="fa-solid fa-check-circle"></i>
              <div>
                <h4>Prime Location</h4>
                <p>Located near Dwarkadhish Temple and other major attractions</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check-circle"></i>
              <div>
                <h4>Modern Amenities</h4>
                <p>Free Wi-Fi, AC rooms, flat-screen TVs, and more</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check-circle"></i>
              <div>
                <h4>24/7 Service</h4>
                <p>Round-the-clock assistance for all your needs</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check-circle"></i>
              <div>
                <h4>Family Friendly</h4>
                <p>Spacious rooms perfect for families and groups</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check-circle"></i>
              <div>
                <h4>Affordable Rates</h4>
                <p>Best value for money in Dwarka</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-check-circle"></i>
              <div>
                <h4>Local Expertise</h4>
                <p>Our staff can guide you to all the best local spots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section bg-light">
        <div className="container">
          <div className="cta-content text-center fade-in-up">
            <h2>Experience Divine Hospitality</h2>
            <p>Book your stay today and discover why guests love Divine Inn</p>
            <a 
              href="https://wa.me/message/RJJFT7WR7W3ME1" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
