function BmiScore({ bmiNo, bmiName, changeWeight }) {
  //console.log(props);
  //const { bmiNo, bmiName } = props;
  // console.log(changeWeight);
  return (
    <div className="text-center bg-light shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">
          {bmiName === "Normal" && <span className="green">{bmiNo}</span>}
          {bmiName !== "Normal" && <span className="red">{bmiNo}</span>}
        </div>
      </div>
      <div className="fs-3 fw-bold text-primary">
        {bmiName === "Normal" && <span className="green">{bmiName}</span>}
        {bmiName !== "Normal" && <span className="red">{bmiName}</span>}
      </div>
      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need lose{" "}
          <span className="fw-bold">{changeWeight.weight} kg"</span>
        </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need gain{" "}
          <span className="fw-bold">{changeWeight.weight} kg"</span>
        </div>
      )}
      {changeWeight.type === "normal" && (
        <div className="fs-4">
          Your weight is normal and good for you &#128512; !!!!
        </div>
      )}
    </div>
  );
}

export default BmiScore;
