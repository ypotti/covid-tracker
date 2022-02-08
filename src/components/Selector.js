import "./index.css";

const Selector = (props) => {
  const objArray = props.data.data;
  const { updateCountry } = props;
  const setCountry = (event) => {
    updateCountry(event.target.value);
  };
  var countries = [
    ...objArray[0].countries,
    ...objArray[1].countries,
    ...objArray[2].countries,
    ...objArray[3].countries,
    ...objArray[4].countries,
    ...objArray[5].countries,
  ];
  countries = countries.sort();
  return (
    <div className="d-flex justify-content-center">
      <form className="my-container mt-3">
        <select className="select" onChange={setCountry}>
          <option>All Countries</option>
          {countries.map((ele, i) => (
            <option key={ele + i} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Selector;
