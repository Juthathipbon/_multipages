import Counter from "../../components/Counter/Counter";
import Add from "../../components/Add/Add";
import Timer from "../../components/Timer/Timer";
import Temper from "../../components/Temperatures/Temper";


import "./Components.css";

function Components() {
  return (
    <div className="components-container">
      <div className="App-title">
        <span className="badge bg-dark">REACT COMPONENTS</span>
      </div>
      <div className='App-components'>
        <Counter/>
        <Add aValue={10} bValue={20}/>
        <Timer/>
      </div>
        <Temper/>
    </div>
  );
}

export default Components;
