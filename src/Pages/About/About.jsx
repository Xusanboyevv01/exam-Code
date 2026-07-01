import "./About.css";
import AboutBg from "../../assets/rediska.png";
import Header from "../../components/Header/Header";

function About() {
  return (
    <>
      <Header />

      <section
        className="about-banner"
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
        <div className="about-overlay">
          <h1>About Us</h1>
          <p>Home &gt; About</p>
        </div>
      </section>
    </>
  );
}

export default About;