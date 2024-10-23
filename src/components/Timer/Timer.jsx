// import { func } from "prop-types";
import "./Timer.css";
import { useEffect, useState } from "react";

function Timer() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
          let interval = null;
          if(running){
                    interval = setInterval(() => {
                              setSeconds(seconds + 1)
                    },1000)
          }
          return() => clearInterval(interval)
  },[running,seconds])

  function runClick() {
    setRunning(!running);
  }

  function secondsToString(seconds) {
          const Minute_seconds = 60;
          const Hour_seconds = 60 * Minute_seconds;
          const Day_seconds = 24 * Hour_seconds;

          const days = Math.floor(seconds / Day_seconds);
          const hours = Math.floor((seconds % Day_seconds) / Hour_seconds);
          const minutes = Math.floor((seconds % Hour_seconds) / Minute_seconds);
          const secs = seconds % Minute_seconds;

          if(days > 0){
                    return `${days}d ${hours}h ${minutes}m ${secs}s`;
          }else if(hours > 0){
                    return `${hours}h ${minutes}m ${secs}s`;
          }else if(minutes > 0){
                    return `${minutes}m ${secs}s`;
          }else{
                    return `${secs}s`;
          }
  }

  function resetClick() {
          setRunning(false)
          setSeconds(0)
  }
  

  return (
    <div className="timer-container">
      <h3 className="timer-title">Timer</h3>
      <p>
        <input
          className="timer-input"
          type="text"
          readOnly={true}
          value={secondsToString(seconds)}
        />
      </p>
      <div className="timer-buttons">
        <button className="btn btn-danger" onClick={resetClick}>Reset</button>
        <button
          className={"btn" + (running ? " btn-warning" : " btn-success")}
          onClick={runClick}
        >
          {running ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
}

export default Timer;
