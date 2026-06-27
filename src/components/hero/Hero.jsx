import React from 'react'
import Plate from "../../assets/food.png";
import Barg from "../../assets/barg.png";
import './Hero.css'
function Hero() {
  return (
    <div>
            <section className="hero">
              <div className="left">
                <h1>
                  Order food online
                  <br />
                  from your favourite
                  <br />
                  local restaurants.
                </h1>
      
                <p>Freshly made food delivered to your door.</p>
      
                <div className="search">
                  <input type="text" placeholder="Enter your location" />
                  <button>Search</button>
                </div>
              </div>
      
              <div className="hero-right">
                <img src={Plate} className="leaf1" alt="" />
                <img src={Barg} className="leaf2" alt="" />

                <div className="card">
                  <h3>200k+</h3>
                  <p>People Delivered</p>
                </div>
      
                <img src={Plate} className="plate" alt="" />
              </div>
            </section>
    </div>
  )
}

export default Hero
