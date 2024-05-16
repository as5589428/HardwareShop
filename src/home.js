import React from "react";
import "./home.css";
import Product from "./product";

function Home() {
  return (
    <dev>
      <div className="home">
        <div className="home__container">
          <img src="./images/home-bg.jpg"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product id title price rating image />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </dev>
  );
}

export default Home;
