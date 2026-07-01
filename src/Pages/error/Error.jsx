import "./Eror.css";
import Error from "../../assets/hato.png";
import Banner from "../../assets/fruits.png";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
function NotFound() {
  return (
    <>
    <Header />
      {/* Banner */}
      <section
        className="notfound-banner"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="banner-overlay"></div>
      </section>

      {/* 404 */}
      <section className="error-section">
        <img src={Error} alt="404" />

        <h2>Oops! page not found</h2>

        <p>
          It consequat do tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor et metus mollis.
        </p>

        <button>Back To Home</button>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;