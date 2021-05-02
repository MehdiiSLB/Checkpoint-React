import "./App.css";

// importer Jobs components
import Jobs from "./components/Jobs";
import Data from "./data.json";
import { useState } from "react";

function App() {
  const [counter, setConter] = useState(0);

  const inc = () => {
    setConter(counter + 1);
  };
  const dec = () => {
    setConter(counter - 1);
  };
  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>

      <div className="App">
        <Jobs data={Data[counter]} />
        {/* {Data.map((elem) => (
        <Jobs data={elem} />
      ))} */}
      </div>
    </div>
  );
}

export default App;
