import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms | Hotel Divine Inn",
  description: "Explore our comfortable and spacious rooms at Hotel Divine Inn Dwarka.",
};

export default function RoomsPage() {
  const rooms = [
    {
      image: '/images/room-1.png',
      title: '2 Bed AC Room',
      description: 'Spacious king-size bed with modern amenities',
      beds: '1 King Bed',
      guests: '2 Guests',
      features: [
        'Air Conditioning',
        'Free Wi-Fi',
        'Flat Screen TV',
        'Attached Bathroom',
        'Daily Housekeeping'
      ]
    },
    {
      image: '/images/room-2.png',
      title: '3 Person AC Bedroom',
      description: 'Comfortable room with neat toilet and all basic facilities',
      beds: '1 King Bed & 1 Single Bed',
      guests: '3 Guests',
      features: [
        'Air Conditioning',
        'Free Wi-Fi',
        'Flat Screen TV',
        'Attached Bathroom',
        'Daily Housekeeping'
      ]
    },
    {
      image: '/images/room-3.png',
      title: '4 Bed AC Room',
      description: 'Best quality family room with all basic facilities',
      beds: '2 King Beds',
      guests: '4 Guests',
      features: [
        'Air Conditioning',
        'Free Wi-Fi',
        'Flat Screen TV',
        'Attached Bathroom',
        'Daily Housekeeping'
      ]
    }
  ];

  return (
    <main className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="container">
          <div className="page-header-content fade-in-up">
            <h1 className="page-title">Our Rooms</h1>
            <p className="page-subtitle">Designed for comfort, styled for luxury</p>
          </div>
        </div>
      </section>

      {/* Rooms Content */}
      <section className="section rooms-section bg-light">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h4 className="section-subtitle">Accommodation</h4>
            <h2 className="section-title">Choose Your Perfect Room</h2>
            <p>Each room is thoughtfully designed to provide maximum comfort during your stay.</p>
          </div>
          
          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <div 
                key={index} 
                className="room-card fade-in-up" 
                data-delay={index * 100}
              >
                <div className="room-img">
                  <img src={room.image} alt={room.title} className="room-img-placeholder" />
                </div>
                <div className="room-info">
                  <h3>{room.title}</h3>
                  <p className="room-desc">{room.description}</p>
                  
                  <div className="room-capacity">
                    <div className="capacity-item">
                      <i className="fa-solid fa-bed"></i>
                      <span>{room.beds}</span>
                    </div>
                    <div className="capacity-item">
                      <i className="fa-solid fa-user-group"></i>
                      <span>{room.guests}</span>
                    </div>
                  </div>

                  <div className="room-features-list">
                    <h4>Room Features:</h4>
                    <ul>
                      {room.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="https://wa.me/message/RJJFT7WR7W3ME1" 
                    className="btn-primary room-book-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center fade-in-up">
            <h2>Ready to Book Your Stay?</h2>
            <p>Experience comfort and hospitality at Hotel Divine Inn</p>
            <a 
              href="https://wa.me/message/RJJFT7WR7W3ME1" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
