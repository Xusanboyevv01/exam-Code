import React from 'react'
import './Explore.css'
import Velik from '../../assets/velik.png'
function Explore() {
  return (
    <div>
      <section className="explore">
        <div className="text">
          <h2>
            Explore your
            <br />
            favourite city's food.
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            officia.
            lorem
          </p>

          <button>Explore →</button>
        </div>

        <div className="image">
          <img src={Velik} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Explore
