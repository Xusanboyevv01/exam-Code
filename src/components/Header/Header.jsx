import'./Header.css';

function Header() {
  return (
    <div>

      <header className="navbar">
        <div className="logo">
          <h1>F</h1>
          <h2>OODI</h2>
        </div>

        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Services</li>
          <li>Offers</li>
        </ul>

        <div className="right">
          <button>Contact</button>
        </div>
      </header>
    </div>


  );
}

export default Header;