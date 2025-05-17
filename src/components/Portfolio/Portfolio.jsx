import React, { useRef } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <PortfolioSection
        title="PORTRAITS PHOTOGRAPHY"
        projects={[
          {
            title: "Faces of Resilience",
            date: "March 2022",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/2000bfff78acf991ed308b0c2feaa5c7a30a8db1",
          },
          {
            title: "Innocence Unveiled",
            date: "January 2020",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/9acf9e8c542f0ef99db94a744c487d5f28d46432",
          },
          {
            title: "Elegance in Monochrom",
            date: "January 2020",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/764fd2b9059f9e46a29bd6dd1158e5ca0d244709",
          },
          {
            title: "Golden Hour Vows",
            date: "November 2021",
            image:
              "/images/portrait-photography.jpg",
          },
        ]}
      />
      <PortfolioSection
        title="EVENT PHOTOGRAPHY"
        projects={[
          {
            title: "The Holi Ceremony",
            date: "March 2021",
            image:
              "/images/holi-photography.jpg",
          },
          {
            title: "Wedding Cermony",
            date: "November 2021",
            image:
              "/images/wedding-photography.jpg",
          },
        ]}
      />
      <PortfolioSection
        title="COMMERCIAL PHOTOGRAPHY"
        projects={[
          {
            title: "Urban Stillness",
            date: "August 2019",
            image:
              "/images/commercial-photography.jpg",
          },
          {
            title: "Chroma Chaos",
            date: "June 2019",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/36bcf31e0842182fa3c7e1d3e0b5e6abdb01d586",
          },
        ]}
      />
    </div>
  );
};
const PortfolioSection = ({ title, projects }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="navigation-controls">
          <button className="nav-button" onClick={scrollLeft}>
            &#8592;
          </button>
          <button className="nav-button" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>
      {/* Add ref here */}
      <div className="projects-grid" ref={scrollRef}>
        {projects.map((project, index) => (
          <div className="project-wrapper" key={index}>
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{project.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;