import Header from "./components/Header";
import CovidGraph from "./components/Graph";
import Selector from "./components/Selector";
import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import { Component } from "react";
import { fetchCountryData, fetchData } from "./api/api";

class App extends Component {
  state = {
    selectedCountry: "All Countries",
    apiCall: false,
    header: {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      lastUpdate: "",
    },
    data: null,
  };

  async componentDidMount() {
    // Receives data = {confirmed,deaths,recovered,lastUpdate}
    const { selectedCountry } = this.state;
    this.updateCountry(selectedCountry);
  }

  updateCountry = async (country) => {
    this.setState({ ...this.state, selectedCountry: country });
    if (country === "All Countries") {
      const data = await fetchData();
      this.setState({
        apiCall: true,
        header: {
          confirmed: data.confirmed,
          deaths: data.deaths,
          recovered: data.recovered,
          lastUpdate: new Date(data.lastUpdate).toDateString(),
        },
        data: data.fetchedData,
      });
    } else {
      const data = await fetchCountryData(country);
      this.setState({
        apiCall: true,
        header: {
          confirmed: data.confirmed,
          deaths: data.deaths,
          recovered: data.recovered,
          lastUpdate: new Date(data.lastUpdate).toDateString(),
        },
      });
    }
  };

  render() {
    const { apiCall, header, data } = this.state;
    return (
      <div className="app">
        {apiCall && <Header data={header} />}
        {apiCall && <Selector data={data} updateCountry={this.updateCountry} />}
        {apiCall && <CovidGraph data={header} />}
        {!apiCall && (
          <div className="d-flex h-100 w-100 justify-content-center align-items-center">
            <ThreeDots height={100} width={100} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
