import "./Eror.css";
import Error from "../../assets/hato.png";
import { Link } from "react-router-dom";
function Eror() {
  return (
    <section className="notfound">
      <img src={Error} alt="404" />

      <h1>Oops! page not found</h1>

      <p>
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
        Maecenas sagittis tortor at metus mollis.
      </p>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

export default Eror;