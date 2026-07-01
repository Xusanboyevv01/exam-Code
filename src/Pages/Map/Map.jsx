import "./Location.css";
import { Link } from "react-router-dom";
import '../../components/Header/Header'
import Header from "../../components/Header/Header";
function Location() {
  return (
      <div>
<Header />
    <section className="location">

      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
        loading="lazy"
        ></iframe>
    </section>
        </div>
  );
}

export default Location;