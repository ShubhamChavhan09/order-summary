import hero from "./hero.svg";
import "./index.css";

function App() {
  return (
    <div className="container">
      <img className="picture" src={hero} alt="" />
      <h2>Order Summary</h2>
      <p className="content">
        You can now listen to millions of <br />
        songs, audiobooks, and podcasts on <br />
        any device anywhere you like!
      </p>
      <div className="plan">
        <i class="fas fa-music"></i>
        <div className="amount">
          <span>Annual Plan</span>
          <p>$59.99/year</p>
        </div>
        <a href="#">Change</a>
      </div>
      <button className="btn">Proceed to Payment</button>
      <p className="last">Cancel Order</p>
    </div>
  );
}

export default App;
