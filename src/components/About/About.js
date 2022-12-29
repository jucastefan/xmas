import React from "react";
import christmas from "../../images/about-christmas.png";
import snow_1 from "../../images/snow-img.png";
import snow_2 from "../../images/snow-img.png";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            About Sharing <br />
            Happiness
          </h2>

          <p className="about__description">
            Sharing these holidays is the best gift you can give, give or share
            your love with the people you love the most and celebrate woth great
            happiness.
          </p>
          <a href="/" className="button">
            Share Now
          </a>
        </div>
        <img src={christmas} alt="about" className="about__img" />
        <img src={snow_1} alt="snow_1" className="about__snow-1" />
        <img src={snow_2} alt="snow_2" className="about__snow-2" />
      </div>
    </section>
  );
}

export default About;
