import "./Variable.css";
import PropTypes from "prop-types";
// import { useState } from "react";

function Variable({type,name, value, setValue}) {
  // let value = props.value
//   const [value, setValue] = useState(props.value || 0);

  return (
    <div className="counter-container">
      <h3 className="counter-title">{name || "Counter"}</h3>
      <div className="counter-main">
      <button
        className="counter-button counter-dec"
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
      <span className="counter-value">{type && type === 'int' ? value : value.toFixed(2)}</span>
      <button
        className="counter-button counter-inc"
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
      </div>
      
    </div>
  );
}

Variable.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  setValue: PropTypes.func,
  type: PropTypes.string
};

export default Variable;
