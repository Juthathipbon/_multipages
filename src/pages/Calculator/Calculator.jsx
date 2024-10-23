import "./Calculator.css";

import { useState } from "react";

function Calculator() {

          const [currentInput, setCurrentInput] = useState('');
      
          const appendNumber = (number) => {
              setCurrentInput((prev) => prev + number);
          };
      
          const appendOperator = (operator) => {
              if (currentInput) {
                  setCurrentInput((prev) => prev + ` ${operator} `);
              }
          };
      
          const clearDisplay = () => {
              setCurrentInput('');
          };
      
          const backspace = () => {
              setCurrentInput((prev) => prev.slice(0, -1));
          };
      
          const calculateResult = () => {
              try {
                  setCurrentInput(eval(currentInput).toString());
              } catch (e) {
                  setCurrentInput('Error');
              }
          };
      
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display-container">
          <div className="display">
            {currentInput}
          </div>
        </div>

        <div className="app-cal">
          <div className="cal-buttons-items">
            <button
              className="btn btncal"
              style={{ backgroundColor: "rgb(243, 246, 248)", border: "#ccc" }}
            >
              <b>%</b>
            </button>
            <button
              className="btn btncal"
              style={{ backgroundColor: "rgb(243, 246, 248)", border: "#ccc" }}
            >
              <b>&#8730;</b>
            </button>
            <button
              className="btn btncal"
              style={{ backgroundColor: "rgb(243, 246, 248)", border: "#ccc" }}
              onClick={() => clearDisplay()}
            >
              <b>CE</b>
            </button>
            <button
              className="btn btncal"
              style={{ backgroundColor: "rgb(0, 15, 126)", color: "#fff" }}
              onClick={() => backspace()}
            >
              <b>C</b>
            </button>
            <button className="btn btncal" onClick={() => appendNumber('7')}>
              <b>7</b>
            </button>
            <button className="btn btncal" onClick={() => appendNumber('8')}>
              <b>8</b>
            </button>
            <button className="btn btncal" onClick={() => appendNumber('9')}>
              <b>9</b>
            </button>
            <button
              className="btn btncal"
              style={{
                backgroundColor: "rgb(228, 60, 60)",
                border: "#ccc",
                color: "#fff",
              }}
              id="subtract"
              onClick={() => appendOperator('-')}
            >
              <b>-</b>
            </button>
            <button className="btn btncal" onClick={() => appendNumber('4')}>
              <b>4</b>
            </button>
            <button className="btn btncal " onClick={() =>appendNumber('5')}>
              <b>5</b>
            </button>
            <button className="btn btncal" onClick={() => appendNumber('6')}>
              <b>6</b>
            </button>
            <button
              className="btn btncal"
              style={{
                backgroundColor: "#0873f6",
                border: "#ccc",
                color: "#fff",
              }}
              id="divide"
              onClick={() => appendOperator('/')}
            >
              &#247;
            </button>
            <button className="btn btncal" onClick={() => appendNumber('1')}>
              <b>1</b>
            </button>
            <button className="btn btncal" onClick={() => appendNumber('2')}>
              <b>2</b>
            </button>
            <button className="btn btncal" onClick={ () => appendNumber('3')}>
              <b>3</b>
            </button>
            <button
              className="btn btncal"
              style={{
                backgroundColor: "#edf646",
                border: "#ccc",
                color: "#fff",
              }}
              id="multiply"
              onClick={() => appendOperator('*')}
            >
              &#215;
            </button>
            <button className="btn btncal">
              <b>.</b>
            </button>
            <button
              className="btn btncal"
              type="number"
              onClick={() =>appendNumber('0')}
            >
              <b>0</b>
            </button>
            <button
              className="btn btncal"
              style={{ backgroundColor: "rgb(243, 246, 248)", border: "#ccc" }}
              onClick={() => calculateResult()}
            >
              <b>=</b>
            </button>
            <button
              className="btn btncal"
              style={{
                backgroundColor: "#3de453",
                border: "#ccc",
                color: "#fff",
              }}
              id="add"
              onClick={() => appendOperator('+')}
            >
              <b>+</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
