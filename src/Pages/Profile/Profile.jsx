import "../Cart/Cart.css";
import CartBg from "../../assets/qulupnay.png";
import Header from "../../components/Header/Header";
function Cart() {
  return (
    <>
    <Header />
<section
  className="cart-banner"
  style={{ backgroundImage: `url(${CartBg})` }}
>
  <div className="cart-overlay">
    <h1>User Profile</h1>
  </div>
</section>
  </>
  );
}

export default Cart;