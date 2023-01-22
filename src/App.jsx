import "./App.css";
import { useState } from "react";

function App() {
  const [name, setname] = useState("ali hassan");
  const [age, setage] = useState(18);
  const [count, setcount] = useState(0);
  
  const ages = () => {
    setage(33);
    
  }

    
  const countsf = () => {
    setcount(count + 1);
    
  }

  return (
    <div className="App">
      <h1>my name is {name}</h1>
      <button onClick={() => setname("belal balasmeh♣")}>Change Name</button>
      <br />
      <h1>my age is {age}</h1>
      <button onClick={ages}>Change age</button>
      <br />    <br />
      <h1>my count is {count}</h1>
      <button onClick={countsf}>Change age</button>
    </div>
  );
}

export default App;
