import React from 'react'
import '../Footer/Footer.css'
import Mobile from '../../assets/Phone.png'
import App from '../../assets/App.png'
import Play from '../../assets/Play.png'
function Download() {
  return (
    <div>
      <section className="download">
      
              <div className="download-text">
                <h1>Put us in your pocket</h1>
      
                <p>
                  Download our app from google play or app
                  store and you don't have to be worry
                  about your food anymore.
                </p>
      
                <div className="stores">
                  <img
                    src={App}
                    alt=""
                  />
      
                  <img
                    src={Play}
                    alt=""
                  />
                </div>
              </div>
      
              <div className="download-img">
                <img src={Mobile} alt="" />
              </div>
      
            </section>
      
    </div>
  )
}

export default Download
