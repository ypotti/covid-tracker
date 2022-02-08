import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const date = new Date();
  return (
    <div className="heading-container">
      <h1 className="heading">Covid Tracker</h1>
      <div className="cards-container">
        <div className="box shadow-sm blue-border">
          <p className="box-head">INFECTED</p>
          <h3 className="box-number">100</h3>
          <p className="box-date">{date.toDateString()}</p>
          <p className="box-desc">Number of Active cases of COVID-19.</p>
        </div>
        <div className="box shadow-sm green-border">
          <p className="box-head">RECOVERED</p>
          <h3 className="box-number">92</h3>
          <p className="box-date">{date.toDateString()}</p>
          <p className="box-desc">Number of Recovered cases of COVID-19.</p>
        </div>
        <div className="box shadow-sm red-border">
          <p className="box-head">DEATHS</p>
          <h3 className="box-number">8</h3>
          <p className="box-date">{date.toDateString()}</p>
          <p className="box-desc">Number of Death cases of COVID-19.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
