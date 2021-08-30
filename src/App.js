import hero from "./hero.svg";
import "./index.css";

function App() {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ShubhamChavhan09/order-summary"
      >
        Github
      </a>
      <div className="container" style={styles.box}>
        <img className="picture" src={hero} alt="App logo" />
        <h2>Order Summary</h2>
        <p className="content">
          You can now listen to millions of <br />
          songs, audiobooks, and podcasts on <br />
          any device anywhere you like!
        </p>
        <div className="plan">
          <i className="fas fa-music"></i>
          <div className="amount">
            <span>Annual Plan</span>
            <p>$59.99/year</p>
          </div>
          <button className="change" type="button">
            Change
          </button>
        </div>
        <button className="btn">Proceed to Payment</button>
        <p className="last">Cancel Order</p>
      </div>
    </>
  );
}
const styles = {
  box: {
    textAlign: "center",
    background: "#fff",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1.5rem",
    boxShadow: "0 0 30px #6d7e88",
  },
};

export default App;
