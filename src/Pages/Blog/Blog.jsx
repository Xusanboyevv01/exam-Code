import "./Blog.css";
import BlogBg from "../../assets/piyoz.png"
import Header from "../../components/Header/Header";
function Blog() {
  return (
    <>

<Header />
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${BlogBg})` }}
      >
        <div className="blog-overlay">
          <h1>Blog</h1>
        </div>
      </section>
    </>
  );
}

export default Blog;