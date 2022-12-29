import React from "react";
import send from "../../images/send-night.png";
import gifts from "../../images/send-gifts.png";
import sendsanta from "../../images/send-santa.png";
import snow from "../../images/snow-img.png";
import "./Send.css";

function Send() {
  return (
    <section className="send section" id="send">
      <h2 className="section__title">
        Send Love This <br />
        Christmas
      </h2>

      <div className="send__container container grid">
        <div className="send__card">
          <img src={send} alt="send__night" />
          <h3 className="send__title"> Spend It With Family</h3>
          <p className="send__description">
            Sharing with family is the best gift you can give
          </p>
        </div>
        <div className="send__card">
          <img src={gifts} alt="send__gifts" />
          <h3 className="send__title"> Give Lots of Love</h3>
          <p className="send__description">
            Send a gift and a lotof love to those most in need.
          </p>
        </div>
        <div className="send__card">
          <img src={sendsanta} alt="send__santa" />
          <h3 className="send__title"> Share Good Wishes</h3>
          <p className="send__description">
            Wish good messages to loved ones this Christmas.
          </p>
        </div>
       
      </div>
    </section>
  );
}

export default Send;
