import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import corona from "../Assests/corona.svg";
import CountUp from "react-countup";

const Header = (props) => {
  const { confirmed, deaths, lastUpdate, recovered } = props.data;
  return (
    <div className="heading-container">
      <h1 className="heading">
        C<img src={corona} alt="O" className="corona-image" />
        VID-19
      </h1>
      <div className="cards-container">
        <div className="box shadow-sm blue-border">
          <p className="box-head text-primary">INFECTED</p>
          <h3 className="box-number">
            <CountUp start={0} end={confirmed} duration={3} separator="," />
          </h3>
          <p className="box-date">{lastUpdate}</p>
          <p className="box-desc">Number of Active cases of COVID-19.</p>
        </div>
        <div className="box shadow-sm green-border">
          <p className="box-head text-success">RECOVERED</p>
          <h3 className="box-number">
            <CountUp start={0} end={recovered} duration={3} separator="," />
          </h3>
          <p className="box-date">{lastUpdate}</p>
          <p className="box-desc">Number of Recovered cases of COVID-19.</p>
        </div>
        <div className="box shadow-sm red-border">
          <p className="box-head text-danger">DEATHS</p>
          <h3 className="box-number">
            <CountUp start={0} end={deaths} duration={3} separator="," />
          </h3>
          <p className="box-date">{lastUpdate}</p>
          <p className="box-desc">Number of Death cases of COVID-19.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
