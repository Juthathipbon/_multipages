import Variable from "../Variable/Variable";
import "./Temper.css";
import { useState } from "react";
import PropTypes from "prop-types";

function Temper({cel, fahren, kel}) {

          const [celsius, setCelsius] = useState(cel || 25);
          const [fahrenheit, setFahrenheit] = useState(fahren || (celsius * 9/5 + 32));
          const [kelvin, setKelvin] = useState(kel || (celsius + 273.15));

          function CelsiusChange(CelsiusNew){
            setCelsius(CelsiusNew);
            setFahrenheit(CelsiusNew * 9/5 + 32);
            setKelvin(CelsiusNew + 273.15);
          }
          
          function FahrenhitChange(FahrenheitNew){
            setFahrenheit(FahrenheitNew);
            setCelsius((FahrenheitNew - 32) * 5/9);
            setKelvin(((FahrenheitNew - 32) * 5/9) + 273.15);
          }

          function KelvinChange(KelvinNew){
            setKelvin(KelvinNew);
            setCelsius(KelvinNew - 273.15);
            setFahrenheit((KelvinNew - 273.15) * 9/5 + 32);
          }

          

  return (
    <div className="temper-container">
      <h3 className="temper-title">Temperatures</h3>
      <h3 className="temper-result">
          <span className="badge bg-primary">{celsius.toFixed(2)}C</span>
          <span className="badge bg-primary">{fahrenheit.toFixed(2)}F</span>
          <span className="badge bg-primary">{kelvin.toFixed(2)}K</span>
      </h3>
      <div className="temper-variables">
          <Variable name="Celsius"  value={celsius}  setValue={CelsiusChange}/> 
          <Variable name="Fahrenheit"  value={fahrenheit}  setValue={FahrenhitChange}/>
          <Variable name="Kelvin"  value={kelvin} setValue={KelvinChange}/>
      </div>

    </div>
  );
}

Temper.propTypes = {
  cel: PropTypes.number,
  fahren: PropTypes.number,
  kel: PropTypes.number
};

export default Temper;
