
import React from "react";
import './../styles/App.css';

const App = () => {
  const[n,setN]=useState(0);
  const onAdd=()=>{
    useState[n+1];
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {n} times</p>
        <button onClick={onAdd}>Click me</button>
    </div>
  )
}

export default App
