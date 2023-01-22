import "./App.css";
import "./theme.css";
import { useState } from "react";


function App() {
  const [name, setname] = useState("ali hassan");
  const [age, setage] = useState(18);
  const [count, setcount] = useState(0);
  const [theme, settheme] = useState("");
  
  const ages = () => {
    setage(33);
    
  }

    
  const countsf = () => {
    setcount(count + 1);
    
  }
  
  return (
  
    <div className={`App ${theme}` }>
            
  <div className="flexxx">
    
           <button onClick={()=>settheme("light")} style={{marginRight:"20px"}}>lagit</button>
            <button onClick={()=>settheme("darck")} style={{marginRight:"20px"}}>darck</button>
            <button onClick={()=>settheme("grey")} style={{marginRight:"20px"}}>grey</button>
            <button onClick={()=>settheme("pink")} >pink</button>
  </div>
        
    

      <h4 style={{marginTop:"50px"}}>my name is {name}</h4>
      <button onClick={() => setname("belal balasmeh♣")}>Change Name</button>
      <br />
      <h4>my age is {age}</h4>
      <button onClick={ages}>Change age</button>
      <br />    <br />
    
      <button onClick={countsf}>Count {count}</button>
    </div>
  );
}

export default App;
