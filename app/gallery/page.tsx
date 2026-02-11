import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Hotel Divine Inn",
  description: "Explore our hotel gallery and see the beautiful rooms and facilities at Hotel Divine Inn.",
};

export default function GalleryPage() {
  return (
    <main className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="container">
          <div className="page-header-content fade-in-up">
            <h1 className="page-title">Gallery</h1>
            <p className="page-subtitle">A visual tour of our hotel</p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h4 className="section-subtitle">Visual Tour</h4>
            <h2 className="section-title">Inside Hotel Divine Inn</h2>
            <p>Discover the beauty and comfort of our facilities</p>
          </div>
          
          <div className="gallery-grid">
            <div className="gallery-item item-1 fade-in-up">
              {/* <img src="/images/gallery-1.png" alt="Hotel Lobby" className="gallery-overlay" /> */}
              <div className="gallery-overlay">
                <i className="fa-solid fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item item-2 fade-in-up" data-delay="100">
              <div className="gallery-overlay">
                <i className="fa-solid fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item item-3 fade-in-up" data-delay="200">
              <div className="gallery-overlay">
                <i className="fa-solid fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item item-4 fade-in-up" data-delay="300">
              <div className="gallery-overlay">
                <i className="fa-solid fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item item-5 fade-in-up" data-delay="400">
              <div className="gallery-overlay">
                <i className="fa-solid fa-search-plus"></i>
              </div>
            </div>
            <div className="gallery-item item-6 fade-in-up" data-delay="500">
              <div className="gallery-overlay">
                <i className="fa-solid fa-search-plus"></i>
              </div>
            </div>
          </div>

          <div className="gallery-info fade-in-up">
            <div className="info-box">
              <i className="fa-solid fa-camera"></i>
              <h3>Professional Photography</h3>
              <p>All photos are actual images of our hotel and rooms</p>
            </div>
            <div className="info-box">
              <i className="fa-solid fa-eye"></i>
              <h3>What You See Is What You Get</h3>
              <p>We believe in transparency and honest representation</p>
            </div>
            <div className="info-box">
              <i className="fa-solid fa-star"></i>
              <h3>Updated Regularly</h3>
              <p>Our gallery is updated with new photos regularly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="section cta-section bg-light">
        <div className="container">
          <div className="cta-content text-center fade-in-up">
            <h2>See It in Person</h2>
            <p>Pictures don&apos;t do justice. Visit us and experience the warmth yourself!</p>
            <a 
              href="https://wa.me/message/RJJFT7WR7W3ME1" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Visit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
