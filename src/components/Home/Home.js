import React from "react";
import moonImg from "../../images/home-moon.png";
import santaImg from "../../images/home-trineo-santa.png";
import mountainImg_3 from "../../images/home-mountain-3.png";
import mountainImg_2 from "../../images/home-mountain-2.png";
import pineTree from "../../images/home-pine-tree.png";
import village from "../../images/home-village.png";
import mountainImg_1 from "../../images/home-mountain-1.png";
import snow from "../../images/home-snow.png";
import "./Home.css";

function Home() {
  return (
    <section className="home section" id="home">
      <img src={moonImg} alt="moon" className="home__moon" />
      <img src={santaImg} alt="santa" className="home__trineo" />
      <img src={mountainImg_3} alt="mountain_3" className="home__mountain-3" />
      <img src={mountainImg_2} alt="mountain_2" className="home__mountain-2" />
      <img src={pineTree} alt="pine" className="home__pine" />
      <img src={village} alt="village" className="home__village" />
      <img src={snow} alt="snow" className="home__snow" />
      <img src={mountainImg_1} alt="mountain_1" className="home__mountain-1" />
    </section>
  );
}

export default Home;
