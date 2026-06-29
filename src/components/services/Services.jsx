import React from 'react'
import './Services.css'
import Chef from '../../assets/background.png'
import icon from '../../assets/icon.png'
import iconPhone from '../../assets/iconPhone.png'
import soat from '../../assets/soat.png'
function Services() {
  return (
    <div>
      <section className="services">

  <div className="service-card active">
    <div className="icon"><img src={icon} alt="" /></div>
    <h3>Wide selection of restaurants</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique.
    </p>
  </div>

  <div className="service-card">
    <div className="icon"><img src={iconPhone} alt="" /></div>
    <h3>Easy ordering process</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur. Ornare massa nunc.
    </p>
  </div>

  <div className="service-card">
    <div className="icon"><img src={soat} alt="" /></div>
    <h3>Fast delivery within 20 min</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh.
    </p>
  </div>

</section>

<section className="join">
  <img src={Chef} alt="" />

  <div className="overlay">
    <h2>Want to be a part of Foodtime?</h2>
    <p>List your restaurant or shop on foodtime.</p>
    <button>Get started →</button>
  </div>
</section>

<section className="faq">

  <h2>Frequently asked questions</h2>

  <div className="tabs">
    <button className="active">General</button>
    <button>For business</button>
  </div>

  <div className="faq-grid">

    <div className="faq-left">

      <details open>
        <summary>How the subscription process works?</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque quos exercitationem.
        </p>
      </details>

      <details>
        <summary>What do I need to apply?</summary>
        <p>Lorem ipsum dolor sit amet.</p>
      </details>

    </div>

    <div className="faq-right">

      <details>
        <summary>Is foodtime available 24 hours?</summary>
        <p>Yes.</p>
      </details>

      <details>
        <summary>Is there any hidden fee included?</summary>
        <p>No.</p>
      </details>

      <details>
        <summary>What do I need to apply?</summary>
        <p>Lorem ipsum.</p>
      </details>

    </div>

  </div>

</section>
    </div>
  )
}

export default Services
