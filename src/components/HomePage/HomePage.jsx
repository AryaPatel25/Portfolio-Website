import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="info-section">
        <div className="info-content">
          <div className="info-text">
            <div className="info-subtitle">Photography by</div>
            <div className="info-title">Name</div>
          </div>

          <div className="info-design">
            <div className="design-placeholder">[ Abstract Design ]</div>
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

      <section className="services-section">
        <div className="services-list">
          {[
            "Event Photography",
            "Commercial Photography",
            "Product Photography",
            "Wedding Photography",
            "Landscape Photography",
            "Portrait Photography",
            "Branding Photography",
          ].map((service, index) => (
            <div key={index} className="service-item">
              <div className="camera-circle">
                <img
                  src="/images/camera.png"
                  alt="Camera Icon"
                  className="camera-icon"
                />
              </div>
              <span className="service-name">{service}</span>
            </div>
          ))}
        </div>
      </section>

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
          <img src="/images/wedding-photography.jpg" alt="Photography sample" />
        </div>
        <div className="gallery-item">
          <img src="/images/nature-photography.jpg" alt="Photography sample" />
        </div>
        <div className="gallery-item">
          <img src="/images/travel-photography.jpg" alt="Photography sample" />
        </div>
        <div className="gallery-item">
          <img src="/images/holi-photography.jpg" alt="Photography sample" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
