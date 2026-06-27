import React from 'react'
import './Faq.css'
function Faq() {
  return (
    <div>
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

export default Faq
