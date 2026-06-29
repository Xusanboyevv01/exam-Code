import "./Location.css";
import { Link } from "react-router-dom";
function Location() {
  return (
      <div>
            <header className="navbar">
        <div className="logo">
          <h1>F</h1>
          <h2>OODI</h2>
        </div>

    <ul>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={'/faq'}>Faq</Link>
      <Link to={'/map'}>Map</Link>
      <Link to={'/cart'}>Cart</Link>
      <Link to={'/profile'}>Profile</Link>
    </ul>

        <div className="right">
          <button>Contact</button>
        </div>
      </header>
    <section className="location">

      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
        loading="lazy"
        ></iframe>
    </section>
        </div>
  );
}

export default Location;