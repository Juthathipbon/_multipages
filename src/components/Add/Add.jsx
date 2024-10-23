import Variable from "../Variable/Variable";
import "../Add/Add.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Add({aValue, bValue}) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    setA(aValue);
    setB(bValue);
  }, [aValue, bValue]);

  //every change
  useEffect(() => {

  })

  //only first load
  useEffect(() => {
    
  }, []);


  return (
    <div className="add-container">
      <h3 className="add-title">Add</h3>
      <h2 className="add-result">
          <span className="badge bg-secondary">A = {a}</span>
          <span className="badge bg-primary">A + B = {a + b}</span>
          <span className="badge bg-secondary">B={b}</span>
      </h2>
      <div className="add-variables">
        <Variable type={'int'} name="A" value={a} setValue={setA} />
        <Variable type={'int'} name="B" value={b} setValue={setB} />
      </div>
    </div>
  );
}

Add .propTypes = {
  aValue: PropTypes.number,
  bValue: PropTypes.number
}

export default Add;
