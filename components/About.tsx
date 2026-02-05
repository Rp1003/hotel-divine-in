import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
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
            enjoys a stay that is relaxed, reliable, and great value.
          </p>
          <Link href="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
        <div className="about-video fade-in-right">
          <div className="placeholder-video">
            <div className="play-btn">
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
