import "./About.css";
import Bg from "../../assets/rediska.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <h1>F</h1>
          <h2>OODI</h2>
        </div>

    <ul>
<ul>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/blog">Blog</Link>
  <Link to="/faq">Faq</Link>
  <Link to="/map">Map</Link>
  <Link to="/cart">Cart</Link>
  <Link to="/profile">Profile</Link>
</ul>
    </ul>

        <div className="right">
          <button>Contact</button>
        </div>
      </header>

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="about-overlay">
          <h1>About Us</h1>

          <p>
            Home <span>&gt;</span> <span className="green">About</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default About;