import "./Cart.css";
import cartBg from "../../assets/double.png";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <section
      className="cart-banner"
      style={{ backgroundImage: `url(${cartBg})` }}
    >
      <header className="navbar">
        <div className="logo">
          <h1>F</h1>
          <h2>OODI</h2>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">Faq</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>

        <div className="right">
          <button>Contact</button>
        </div>
      </header>

      <div className="cart-overlay">
        <h1>Cart</h1>
      </div>
    </section>
  );
}

export default Cart;