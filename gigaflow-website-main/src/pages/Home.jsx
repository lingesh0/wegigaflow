import React, { useState } from "react";
import Lottie from "react-lottie";
import "../styles/Home.css";
import GigaH3 from "../assets/Giga-H3.svg";
import GigaC1 from "../assets/Giga-C1.svg";
import GigaC2 from "../assets/Giga-C2.svg";
import GigaC3 from "../assets/Giga-C3.svg";
import Gowdamras from "../assets/Gowdamras.png";
import God from "../assets/God.png";
import Gowdaam from "../assets/Gowthaam.png";
import Dhaya from "../assets/Dhayananth.png";
import Ling from "../assets/Ling.png";
import TextField from "@mui/material/TextField";
import logo from "../assets/Logo-1.png";
import { Button } from "@mui/material";
import insta from "../assets/insta.svg";
import watsap from "../assets/watsap.svg";
import x from "../assets/x.svg";
import linked from "../assets/linkedin.svg";

export const Home = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [queryValue, setQueryValue] = useState("");

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQueryValue(e.target.value);
  };

  const handleSubmitClick = () => {};

  const handleGetQuoteClick = () => {
    const whatsappNumber = "+918903844107";
    const message = encodeURIComponent(
      `Hello, I would like to get a quote for the services. My name is ${nameValue}.`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank"); // Opens the WhatsApp chat in a new tab
  };

  return (
    <div className="hm-gf-container-1" >
      <div className="hm-gf-content" id="home">
        <div className="hm-gf-t">
          <div className="hm-gf-t1"  >Digital solutions for</div>
          <div className="hm-gf-t2">
            Your<span className="hm-gf-t2-sp">Business</span>
          </div>
          <p className="hm-gf-para">
            At GigaFlow, we specialize in creating innovative websites,
            optimizing online presence, and analyzing data to unlock your
            business's full potential. Our team of experts is dedicated to
            delivering tailor-made digital solutions that not only meet but
            exceed your expectations. Whether you're looking to build a stunning
            website, improve your search engine rankings, or make data-driven
            decisions, GigaFlow is your trusted partner in the digital world.
          </p>
          <div className="hm-gf-btn">
            <button className="hm-gf-expbtn">Explore</button>
          </div>
        </div>
        <div className="hm-gf-img-container">
          <img src={GigaH3} alt="Digital Solutions" className="hm-gf-image" />
        </div>
      </div>

      {/* about content from here on...... */}

      <div className="hm-about-container"  id="about">
        <div className="hm-about-content">
          <div className="hm-about-t"  >
            About Us</div>
          <div className="hm-about-para">
            GigaFlow was born out of a vision to revolutionize the digital
            landscape for businesses. Since our inception on August 1st, 2024,
            we have been committed to providing top-notch digital solutions that
            are both innovative and effective. We started with a small team of
            dedicated professionals, and today, we continue to grow, driven by
            our passion for technology and our desire to make a meaningful
            impact on our clients' success.
          </div>
          <div className="hm-about-para">
            Our mission is to empower businesses by offering tailored digital
            solutions that foster growth and success. We strive to be more than
            just a service provider; we aim to be a trusted partner who is
            invested in your long-term success. By leveraging the latest
            technologies and industry best practices, we help you navigate the
            complexities of the digital world and turn your vision into reality.
          </div>
          <div className="hm-about-para">
            At GigaFlow, we envision a world where businesses of all sizes can
            harness the power of technology to reach their full potential. Our
            goal is to be a leader in the digital services industry, known for
            our creativity, reliability, and commitment to excellence. We aspire
            to build lasting relationships with our clients, helping them thrive
            in an ever-evolving digital landscape.
          </div>
        </div>
      </div>

      {/* Services content */}

      <div className="hm-service-container" id="services">
        <div className="hm-service-content">
          <div className="hm-service-t">Services</div>
          <div className="hm-service-cards-container">
            <div className="hm-service-card">
              <div className="hm-service-card-content-o">
                <div className="hm-service-card-img">
                  <img
                    src={GigaC1}
                    alt="Digital Solutions"
                    className="hm-service-card-image"
                  />
                </div>
                <div className="hm-service-card-content">
                  <div className="hm-service-card-t">
                    <b>Web Development</b>
                  </div>
                  At GigaFlow, we build more than just websites—we create
                  digital experiences that resonate with your audience. Our web
                  development services are designed to bring your vision to
                  life, whether you need a simple brochure site, a complex
                  e-commerce platform, or a dynamic web application.
                </div>
              </div>
            </div>
            <div className="hm-service-card">
              <div className="hm-service-card-content-o">
                <div className="hm-service-card-img">
                  <img
                    src={GigaC2}
                    alt="Digital Solutions"
                    className="hm-service-card-image"
                  />
                </div>
                <div className="hm-service-card-content">
                  <div className="hm-service-card-t">
                    <b>SEO</b>
                  </div>
                  Visibility is key to online success. We understand that having
                  a great website is only the first step. Our SEO services are
                  designed to elevate your online presence, ensuring that your
                  target audience can find you easily when they search for the
                  products or services you offer.
                </div>
              </div>
            </div>
            <div className="hm-service-card">
              <div className="hm-service-card-content-o">
                <div className="hm-service-card-img">
                  <img
                    src={GigaC3}
                    alt="Digital Solutions"
                    className="hm-service-card-image"
                  />
                </div>
                <div className="hm-service-card-content">
                  <div className="hm-service-card-t">
                    <b>Data Analysis</b>
                  </div>
                  Unlock the full potential of your business data with our
                  expert data analysis services. At GigaFlow, we specialize in
                  turning raw data into actionable insights, enabling you to
                  make informed decisions that drive growth and enhance your
                  business performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our team */}

      <div className="hm-team-container">
        <div className="hm-team-content">
          <div className="hm-team-t">Our Team</div>
          <div className="hm-team-row">
            <div className="hm-team-row1-cont">
              <div className="hm-team-row-card">
                <div className="hm-team-row-card-img">
                  <img
                    src={Gowdamras}
                    alt="Digital Solutions"
                    className="hm-team-image"
                  />
                </div>
                <div className="hm-team-row-card-img-text">
                  <div className="hm-team-row-card-name">Gowthamraj M S</div>
                  <div className="hm-team-row-card-desg">Founder & CEO</div>
                  <div className="hm-team-row-card-company">GigaFlow</div>
                </div>
              </div>
              <div className="hm-team-row-card">
                <div className="hm-team-row-card-img">
                  <img
                    src={God}
                    alt="Digital Solutions"
                    className="hm-team-image"
                  />
                </div>
                <div className="hm-team-row-card-img-text">
                  <div className="hm-team-row-card-name">Godreign Elgin Y</div>
                  <div className="hm-team-row-card-desg">Co-Founder & CEO</div>
                  <div className="hm-team-row-card-company">GigaFlow</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hm-team-row">
            <div className="hm-team-row2-cont">
              <div className="hm-team-row-card">
                <div className="hm-team-row-card-img">
                  <img
                    src={Ling}
                    alt="Digital Solutions"
                    className="hm-team-image"
                  />
                </div>
                <div className="hm-team-row-card-img-text">
                  <div className="hm-team-row-card-name">Lingesh T</div>
                  <div className="hm-team-row-card-desg">
                    Frontend Developer
                  </div>
                  <div className="hm-team-row-card-company">GigaFlow</div>
                </div>
              </div>
              <div className="hm-team-row-card">
                <div className="hm-team-row-card-img">
                  <img
                    src={Gowdaam}
                    alt="Digital Solutions"
                    className="hm-team-image"
                  />
                </div>
                <div className="hm-team-row-card-img-text">
                  <div className="hm-team-row-card-name">Gowthaam J</div>
                  <div className="hm-team-row-card-desg">Backend Developer</div>
                  <div className="hm-team-row-card-company">GigaFlow</div>
                </div>
              </div>
              <div className="hm-team-row-card">
                <div className="hm-team-row-card-img">
                  <img
                    src={Dhaya}
                    alt="Digital Solutions"
                    className="hm-team-image"
                  />
                </div>
                <div className="hm-team-row-card-img-text">
                  <div className="hm-team-row-card-name">Dhayananth E</div>
                  <div className="hm-team-row-card-desg">Marketing Lead</div>
                  <div className="hm-team-row-card-company">GigaFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="hm-footer-container">
        <div className="hm-footer-content">
          <div className="hm-footer-upper">
            <div className="hm-footer-upper-left">
              <div className="hm-footer-upper-left-logo">
                <img src={logo} alt="Logo" className="hm-footer-logo"></img>
              </div>
            </div>
            <div className="hm-footer-upper-mid">
              <div className="hm-footer-upper-mid-t" id="contact">Contact Us</div>
              <div className="hm-footer-upper-mid-name">
                <input
                  type="text"
                  value={nameValue}
                  onChange={handleNameChange}
                  className="hm-footer-text-small"
                  placeholder="Name"
                />
              </div>
              <div className="hm-footer-upper-mid-email">
                <input
                  type="email"
                  value={emailValue}
                  onChange={handleEmailChange}
                  className="hm-footer-text-small"
                  placeholder="Email"
                />
              </div>
              <div className="hm-footer-upper-mid-query">
                <input
                  type="text"
                  value={queryValue}
                  onChange={handleQueryChange}
                  className="hm-footer-text-small"
                  placeholder="Type your Query..."
                />
              </div>
              <div className="hm-footer-upper-mid-buttons">
                <div className="hm-footer-upper-mid-buttons-submit">
                  <button
                    onClick={handleSubmitClick}
                    className="hm-footer-submit-button"
                  >
                    Submit
                  </button>
                </div>
                <div className="hm-footer-upper-mid-buttons-getquote">
                  <button
                    onClick={handleGetQuoteClick}
                    className="hm-footer-getquery-button"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
            <div className="hm-footer-upper-right">
              <div className="hm-footer-upper-right-social">Social Links</div>
              <div className="hm-footer-upper-right-icons">
                <img
                  src={insta}
                  alt="instagram logo"
                  className="social-icons"
                  id="insta-icon"
                ></img>
                <img
                  src={watsap}
                  alt="watsap logo"
                  className="social-icons"
                  id="watsap-icon"
                ></img>
                <img
                  src={x}
                  alt="twitter logo"
                  className="social-icons"
                  id="x-icon"
                ></img>
                <img
                  src={linked}
                  alt="linked in logo"
                  className="social-icons"
                  id="linkedin-icon"
                ></img>
              </div>
              <div className="hm-footer-upper-right-support">Support</div>
              <div className='hm-footer-upper-right-support-link'>
                <a href="mailto:wegigaflow@gmail.com">wegigaflow@gmail.com</a>
</div>


            </div>
          </div>
          <div className="hm-footer-line"></div>
          <div className="hm-footer-copyright">
            © GigaFlow 2024. All Copyrights are reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
