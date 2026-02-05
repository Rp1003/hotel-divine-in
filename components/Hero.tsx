import Link from 'next/link';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content fade-in-up" style={{marginTop: "55px"}}>
        <p className="hero-tagline">Welcome to Hotel Divine Inn</p>
        <h1 className="hero-title">
          Where Comfort Meets<br />Dwarka&apos;s Calm
        </h1>
        <p className="hero-desc">Modern rooms, warm hospitality, and great value for your stay.</p>
        <div className="hero-btns">
          <a 
            href="https://wa.me/message/RJJFT7WR7W3ME1" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Stay
          </a>
          <Link href="/rooms" className="btn-outline">
            View Rooms
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <i className="fa-solid fa-star"></i>
            <span>5-Star Rating</span>
          </div>
          <div className="stat-item">
            <i className="fa-solid fa-wifi"></i>
            <span>Free High-Speed Wi-Fi</span>
          </div>
          <div className="stat-item">
            <i className="fa-solid fa-water"></i>
            <span>Near to Temple</span>
          </div>
        </div>
      </div>
    </header>
  );
}
