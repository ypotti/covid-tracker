import axios from "axios";
import lodash from "lodash";

export const fetchData = async () => {
  const fullUrl = "https://corona.lmao.ninja/v2/continents";
  try {
    const fetchedData = await axios.get(fullUrl);
    const fetchedArray = fetchedData.data;
    const confirmed = lodash.sum(fetchedArray.map((obj) => obj.cases));
    const deaths = lodash.sum(fetchedArray.map((obj) => obj.deaths));
    const recovered = lodash.sum(fetchedArray.map((obj) => obj.recovered));
    const lastUpdate = fetchedData.data[0].updated;
    return { fetchedData, confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log("Data Fetch Error - API/1");
  }
};

export const fetchCountryData = async (country) => {
  const countryUrl =
    "https://corona.lmao.ninja/v2/countries/" +
    country +
    "?yesterday=true&strict=true&query";
  try {
    const fetchedData = await axios.get(countryUrl);
    const data = fetchedData.data;
    const confirmed = data.cases;
    const deaths = data.deaths;
    const recovered = data.recovered;
    const lastUpdate = data.updated;
    return { fetchedData, confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log("Data Fetch Error - API/1");
  }
};
