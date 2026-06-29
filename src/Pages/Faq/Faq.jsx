import "./Faq.css";
import Hero from "../../assets/piyoz.png";
import Header from '../Blog/Header'
function Blog() {
  return (
    <div>

      <Header />
    <div className="blog-hero" style={{ backgroundImage: `url(${Hero})` }}>
      <div className="blog-overlay">
        <h1>Faq Page</h1>
      </div>
    </div>
    </div>
  );
}

export default Blog;
