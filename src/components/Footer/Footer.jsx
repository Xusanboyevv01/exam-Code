import "./Footer.css";
import Burger from "../../assets/Ovqat.png";
function Footer() {
  return (
    <>
      <footer>

        <div className="footer">

          <div>
            <h2>Foodtuck</h2>
            <p>
              Subscribe our newsletter and
              get discount 25%off
            </p>

            <div className="email">
              <input placeholder="Enter Your Email" />
              <button>➜</button>
            </div>
          </div>

          <div>
            <h3>Contact us</h3>
            <p>Kolkata India, 3rd Floor, Office 45</p>
            <p>00965 - 96659986</p>
            <p>m.alyaqout@4house.co</p>
            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>

          <div>
            <h3>Links</h3>
            <p>About us</p>
            <p>Contact us</p>
            <p>Our Menu</p>
            <p>Team</p>
            <p>FAQ</p>
          </div>

          <div>
            <h3>Instagram Gallery</h3>

            <div className="gallery">
<img src={Burger} alt="" />
            </div>

          </div>

        </div>

        <div className="copyright">
          <p>Copyright © 2024. All rights reserved.</p>

          <div>
            <span>Privacy Policy</span>
            <span>Term of Use</span>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;