import { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || weight <= "0") {
      setAlert("weightError");
      console.error("Not a valid Weight");
    } else if (isNaN(height) || height <= "0") {
      setAlert("heightError");
      console.error("Not a valid Height");
    } else {
      setAlert(false);
      getData(weight, height);
      setWeight("");
      setHeight("");

      //   console.log(height);
      //   console.log(weight);
    }
  };
  return (
    <div className="col-sm-4 bg-light shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2"> BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(kg):</label>
              <input
                type="text"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Height(m):</label>
              <input
                type="text"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
      </form>
      {alert==="weightError" && (
        <div className="alert alert-danger" role="alert">
          Please enter valid weight
        </div>
      )}
      {alert==="heightError" && (
        <div className="alert alert-danger" role="alert">
          Please enter valid height
        </div>
      )}
    </div>
  );
}

export default Form;
