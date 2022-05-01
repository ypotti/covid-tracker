import "./index.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
