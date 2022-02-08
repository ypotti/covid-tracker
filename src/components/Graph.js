import "./index.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const CovidGraph = (props) => {
  const { data } = props;
  const { confirmed, recovered, deaths } = data;
  return (
    <div className="bar-container">
      <div className="col-10 col-md-7 col-lg-6">
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: ["#007BFF", "#28A745", "#FF073A"],
                data: [confirmed, recovered, deaths],
              },
            ],
          }}
          options={{
            legend: { display: false },
          }}
        />
      </div>
    </div>
  );
};

export default CovidGraph;
