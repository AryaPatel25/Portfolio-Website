import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-header">
          <div className="contact-label">Contact Me</div>
          <div className="contact-title">Get in Touch with Me</div>
        </div>

        <div className="contact-description">
          Step into a world of timeless photography with me. Explore our range
          of photography services, each crafted to tell your unique story
          through captivating images. Whether it's the magic of portraits, the
          emotion of events, or the allure of commercial photography, we're here
          to bring your vision to life.
        </div>

        <div className="social-media-container">
          <button className="social-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_204_887)">
                <path
                  d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_887">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button className="social-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45158C17.9652 6.2758 17.9613 6.09611 17.9535 5.92033C18.7566 5.33958 19.4496 4.62024 20 3.79611C19.2521 4.12886 18.458 4.34618 17.6449 4.44064C18.5011 3.92745 19.1421 3.12126 19.4492 2.1715C18.6438 2.64883 17.763 2.98554 16.8445 3.16721C16.2257 2.50966 15.4075 2.07429 14.5164 1.92841C13.6253 1.78252 12.711 1.93424 11.9148 2.36011C11.1186 2.78598 10.4848 3.46229 10.1115 4.28446C9.73825 5.10663 9.64619 6.02888 9.84961 6.90861C8.21874 6.82677 6.62328 6.40312 5.16665 5.66511C3.71002 4.92711 2.42474 3.89123 1.39414 2.62463C0.870333 3.52773 0.710047 4.5964 0.945859 5.61344C1.18167 6.63048 1.79589 7.51957 2.66367 8.10002C2.01219 8.07933 1.37498 7.90393 0.804688 7.5883V7.63908C0.804104 8.58682 1.13175 9.50552 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                fill="white"
              />
            </svg>
          </button>

          <button className="social-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_204_893)">
                <path
                  d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_893">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="scroll-message">Scroll Down To Send me a Message</div>
      </div>

      <div className="contact-form-container">
        <div className="contact-info-section">
          <div className="contact-info-content">
            <div className="section-title">Contact Information</div>
            <div className="section-description">
              Feel free to reach out to us through various channels. We are
              available by phone, email, and social media for your convenience.
            </div>
          </div>
          <div className="contact-links">
            <div className="contact-link">
              <div className="link-text">+1-123-456-7890</div>
              <div className="link-icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.25 4.25L19.5 4.25C19.6989 4.25 19.8897 4.32902 20.0303 4.46967C20.171 4.61032 20.25 4.80109 20.25 5V16.25C20.25 16.6642 19.9142 17 19.5 17C19.0858 17 18.75 16.6642 18.75 16.25V6.81066L5.03033 20.5303C4.73744 20.8232 4.26256 20.8232 3.96967 20.5303C3.67678 20.2374 3.67678 19.7626 3.96967 19.4697L17.6893 5.75L8.25 5.75C7.83579 5.75 7.5 5.41421 7.5 5C7.5 4.58579 7.83579 4.25 8.25 4.25Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="contact-link">
              <div className="link-text">info@damien braunphotography.com</div>
              <div className="link-icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.25 4.25L19.5 4.25C19.6989 4.25 19.8897 4.32902 20.0303 4.46967C20.171 4.61032 20.25 4.80109 20.25 5V16.25C20.25 16.6642 19.9142 17 19.5 17C19.0858 17 18.75 16.6642 18.75 16.25V6.81066L5.03033 20.5303C4.73744 20.8232 4.26256 20.8232 3.96967 20.5303C3.67678 20.2374 3.67678 19.7626 3.96967 19.4697L17.6893 5.75L8.25 5.75C7.83579 5.75 7.5 5.41421 7.5 5C7.5 4.58579 7.83579 4.25 8.25 4.25Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="message-section">
          <div className="message-content">
            <div className="section-title">Send Me a Message</div>
            <div className="section-description">
              Have a specific inquiry or message for us? Please use the contact
              form below, and we'll get back to you promptly.
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="FIRST NAME"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="LAST NAME"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-group full-width">
              <label className="form-label">Your Message</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="submit-section">
              <div className="submit-text">Send Message</div>
              <button type="submit" className="submit-button">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3125 5.1875L24.375 5.1875C24.6236 5.1875 24.8621 5.28627 25.0379 5.46209C25.2137 5.6379 25.3125 5.87636 25.3125 6.125V20.1875C25.3125 20.7053 24.8928 21.125 24.375 21.125C23.8572 21.125 23.4375 20.7053 23.4375 20.1875V8.38833L6.28791 25.5379C5.9218 25.904 5.3282 25.904 4.96209 25.5379C4.59597 25.1718 4.59597 24.5782 4.96209 24.2121L22.1117 7.0625L10.3125 7.0625C9.79473 7.0625 9.375 6.64277 9.375 6.125C9.375 5.60723 9.79473 5.1875 10.3125 5.1875Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
