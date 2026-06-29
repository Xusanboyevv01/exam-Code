import "./Profile.css";
import { Link } from "react-router-dom";
import Bg from "../../assets/qulupnay.png";

function Profile() {
  return (
    <>
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
<div className="bg">

<img src={Bg} alt="" />
</div>
        <div className="overlay">
          <h1>User Profile</h1>

        </div>

    </>
  );
}

export default Profile;