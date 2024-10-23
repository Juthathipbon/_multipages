import "./Animation.css";
import ballbas from "../../assets/ballbas.png";
import ballfoot from "../../assets/ballfoot.png";
import ballvol from "../../assets/ballvol.png";
import ballhuman from "../../assets/ballhuman.png";
import ballcar from "../../assets/ballcartoon.png";

import { useState, useEffect } from "react";
function Animation() {
  const fieldWidth = 700;
  const fieldHeight = 400;
  const diameter = 100;
  const vx = 5;
  const vy = 5;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [goRight, setGoRight] = useState(true);

  const [goDown, setGoDown] = useState(true);

  const [running, setRunning] = useState(false);

  const [ballImage, setBallImage] = useState("none");

  const maxLeft = fieldWidth - diameter - 2;

  const maxTop = fieldHeight - diameter - 2;

  useEffect(() => {
          const interval = setInterval(() => {
                    if (running) {
                              calculate();
                    }
          }, 25);
          return () => clearInterval(interval);
  }, [running, x, y]);

  const calculate = () => {
          if(goRight){
                    setX((prevX)=> prevX + vx);
                    if(x >= maxLeft){
                              setGoRight(false);
                    }
          }else{
                    setX((prevX)=> prevX - vx);
                    if(x <= 0){
                              setGoRight(true);
                    }
          }

          if(goDown){
                    setY((prevY)=> prevY + vy);
                    if(y >= maxTop){
                              setGoDown(false);
                    }
          }else{
                    setY((prevY)=> prevY - vy);
                    if(y <= 0){
                              setGoDown(true);
                    }
          }
  }
  const handleRunClick = () => {
          setRunning(!running);
  }

  const handleImageChange = (image) => {
    setBallImage(image);
  };

  return (
    <div className="animation-container">
      <div className="animation">
        <div
          id="field"
          style={{
            width: fieldWidth,
            height: fieldHeight,
            position: "relative",
          }}
        >
          <div
            id="ball"
            className="ball"
            style={{
              position: "absolute",
              backgroundImage: ballImage,
              left: x,
              top: y,
              width: diameter,
              height: diameter,
            }}
          ></div>
        </div>
        <div id="control">
          {running ? (
            <button
              className="btn btn-danger"
              onClick={handleRunClick}
            >
              PAUSE
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={handleRunClick}
            >
              Run
            </button>
          )}
          <button
            id="btnballnon"
            className="btn btn-dark"
            onClick={() => handleImageChange("none")}
          >
            None
          </button>
          <button
            id="btnballbas"
            className="btn btn-primary"
            onClick={() => handleImageChange('url("'+ballbas+'")') }
          >
            Basketball
          </button>
          <button
            id="btnballfoot"
            className="btn btn-primary"
            onClick={() => handleImageChange('url("'+ballfoot+'")') }
          >
            Football
          </button>
          <button
            id="btnballvol"
            className="btn btn-primary"
            onClick={() => handleImageChange('url("'+ballvol+'")') }
          >
            Volleyball
          </button>
          <button
            id="btnballhum"
            className="btn btn-primary"
            onClick={() => handleImageChange('url("'+ballhuman+'")') }
          >
            Human
          </button>
          <button
            id="btnballcar"
            className="btn btn-primary"
            onClick={() => handleImageChange('url("'+ballcar+'")') }
          >
            Cartoon
          </button>
        </div>
      </div>
    </div>
  );
}

export default Animation;
