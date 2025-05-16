import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const services = [
    "Event Photography",
    "Commercial Photography",
    "Product Photography",
    "Wedding Photography",
    "Landscape Photography",
    "Portrait Photography",
    "Branding Photography",
  ];

  // Split services into two arrays: first 4 and the rest
  const leftServices = services.slice(0, 4);
  const rightServices = services.slice(4);

  return (
    <div className="homepage">
      <section className="info-section">
        <div className="info-content">
          <div className="info-text">
            <div className="info-subtitle">Photography by</div>
            <div className="info-title">Name</div>
          </div>

          <div className="info-cta">
            <div className="cta-wrapper">
              <div className="cta-text">Let's</div>
              <div className="cta-button">
                <div className="arrow-icon">↗</div>
              </div>
            </div>
            <div className="cta-subtitle">Work Together</div>
          </div>
        </div>
      </section>

      {/* New wrapper to align everything */}
      <div className="content-wrapper">
        {/* Title row with photography title only */}
        <div className="title-row">
          <h2 className="photography-title">My Work:-</h2>
        </div>

        {/* Two-column services list */}
        <div className="services-list-columns">
          {/* Left column */}
          <div className="services-column">
            {leftServices.map((service, index) => (
              <div key={index} className="service-item-vertical">
                <div className="camera-circle">
                  <img
                    src="/images/camera.png"
                    alt="Camera Icon"
                    className="camera-icon"
                  />
                </div>
                <span>{service}</span>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="services-column">
            {rightServices.map((service, index) => (
              <div key={index} className="service-item-vertical">
                <div className="camera-circle">
                  <img
                    src="/images/camera.png"
                    alt="Camera Icon"
                    className="camera-icon"
                  />
                </div>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery section */}
        <section className="gallery-grid">
          <div className="gallery-item">
            <img
              src="/images/portrait-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img
              src="/images/commercial-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img
              src="/images/wedding-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img src="/images/nature-photography.jpg" alt="Photography sample" />
          </div>
          <div className="gallery-item">
            <img
              src="/images/travel-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img src="/images/holi-photography.jpg" alt="Photography sample" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
