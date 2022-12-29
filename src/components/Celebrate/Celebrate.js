import React from "react";
import celebrate from "../../images/celebarte-church.png";
import snow from "../../images/snow-img.png";
import "./Celebrate.css";

function Celebrate() {
  return (
    <section className="celebrate section" id="celebrate">
      <div className="celebrate__container container grid">
        <div className="celebrate__data">
          <h2 className="section__title">
            Celebrate With A <br />
            Lot Of Love
          </h2>
          <p className="celebrate__description">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbours, wishing the, a
            good Christmas message.
          </p>

          <a href="/" className="button">
            Celebrate Now
          </a>
          <img src={celebrate} alt="celebrate" className="celebrate__img" />
          <img src={snow} alt="celebrate" className="celebrate__snow-1" />
          <img src={snow} alt="celebrate" className="celebrate__snow-2" />
        </div>
      </div>
    </section>
  );
}

export default Celebrate;
