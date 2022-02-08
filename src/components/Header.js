import "./index.css";
import { fetchData } from "../api/api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import corona from "../Assests/corona.svg";
import CountUp from "react-countup";

class Header extends Component {
  state = {
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    lastUpdate: "",
  };
  date = new Date();
  async componentDidMount() {
    // Receives data = {confirmed,deaths,recovered,lastUpdate}
    const data = await fetchData();
    // console.log(data);
    this.setState({
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered,
      lastUpdate: new Date(data.lastUpdate).toDateString(),
    });
  }
  render() {
    const { confirmed, deaths, recovered, lastUpdate } = this.state;
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
              <CountUp start={0} end={confirmed} duration={4} separator="," />
            </h3>
            <p className="box-date">{lastUpdate}</p>
            <p className="box-desc">Number of Active cases of COVID-19.</p>
          </div>
          <div className="box shadow-sm green-border">
            <p className="box-head text-success">RECOVERED</p>
            <h3 className="box-number">
              <CountUp start={0} end={recovered} duration={4} separator="," />
            </h3>
            <p className="box-date">{lastUpdate}</p>
            <p className="box-desc">Number of Recovered cases of COVID-19.</p>
          </div>
          <div className="box shadow-sm red-border">
            <p className="box-head text-danger">DEATHS</p>
            <h3 className="box-number">
              <CountUp start={0} end={deaths} duration={4} separator="," />
            </h3>
            <p className="box-date">{lastUpdate}</p>
            <p className="box-desc">Number of Death cases of COVID-19.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
