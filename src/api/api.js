import axios from "axios";
import lodash from "lodash";

const url = "https://corona.lmao.ninja/v2/continents";

export const fetchData = async () => {
  try {
    const fetchedData = await axios.get(url);
    const fetchedArray = fetchedData.data;
    console.log(fetchedData);
    const confirmed = lodash.sum(fetchedArray.map((obj) => obj.cases));
    const deaths = lodash.sum(fetchedArray.map((obj) => obj.deaths));
    const recovered = lodash.sum(fetchedArray.map((obj) => obj.recovered));
    const lastUpdate = fetchedData.data[0].updated;
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log("Data Fetch Error - API/1");
  }
};
