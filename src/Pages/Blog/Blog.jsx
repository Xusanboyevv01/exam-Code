import "./Blog.css";
import Hero from "../../assets/piyoz.png";
import Header from './Header'
function Blog() {
  return (
    <div>

      <Header />
    <div className="blog-hero" style={{ backgroundImage: `url(${Hero})` }}>
      <div className="blog-overlay">
        <h1>Blog</h1>
      </div>
    </div>
    </div>
  );
}

export default Blog;
