import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Hotel Divine Inn",
  description: "Read what our guests say about their experience at Hotel Divine Inn Dwarka.",
};

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Tarang",
      location: "India",
      rating: 5,
      text: "Had a wonderful stay! The rooms were clean, spacious, and very comfortable. Staff was extremely polite and helpful, always ready to assist. The location is perfect with easy access to nearby places. Overall, a great experience—highly recommended!",
      date: "January 2025"
    },
    {
      name: "Priya Shah",
      location: "Mumbai, India",
      rating: 5,
      text: "Excellent hotel near the temple. The rooms are well-maintained and the staff is very courteous. Great value for money. Will definitely visit again!",
      date: "December 2024"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      text: "Perfect location for pilgrimage. Clean rooms, good service, and reasonable prices. The WiFi was fast and reliable. Highly recommend for families.",
      date: "November 2024"
    },
    {
      name: "Sneha Patel",
      location: "Ahmedabad, India",
      rating: 5,
      text: "Very nice hotel with modern amenities. The AC worked perfectly and the beds were comfortable. Staff was helpful with local recommendations. Would stay here again!",
      date: "October 2024"
    }
  ];

  return (
    <main className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="container">
          <div className="page-header-content fade-in-up">
            <h1 className="page-title">Guest Reviews</h1>
            <p className="page-subtitle">What our guests say about us</p>
          </div>
        </div>
      </section>

      {/* Reviews Stats */}
      <section className="section reviews-stats-section">
        <div className="container">
          <div className="stats-grid fade-in-up">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fa-solid fa-star"></i>
              </div>
              <h3>5.0</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3>500+</h3>
              <p>Happy Guests</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3>4.9</h3>
              <p>Guest Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="section reviews-section bg-light">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h4 className="section-subtitle">Testimonials</h4>
            <h2 className="section-title">What Our Guests Say</h2>
            <p>Real experiences from real guests</p>
          </div>
          
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="review-card-full fade-in-up" 
                data-delay={index * 100}
              >
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-img">
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <div>
                      <h5>{review.name}</h5>
                      <span className="review-location">
                        <i className="fa-solid fa-location-dot"></i>
                        {review.location}
                      </span>
                    </div>
                  </div>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="review-text">&quot;{review.text}&quot;</p>
                <div className="review-date">
                  <i className="fa-solid fa-calendar"></i>
                  {review.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center fade-in-up">
            <h2>Share Your Experience</h2>
            <p>We&apos;d love to hear about your stay at Hotel Divine Inn</p>
            <a 
              href="https://wa.me/message/RJJFT7WR7W3ME1" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
