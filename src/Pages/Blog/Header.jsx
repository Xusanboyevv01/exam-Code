import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
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
    </div>
  );
}

export default Header;
