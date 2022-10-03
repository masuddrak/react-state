import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count, setCount]=useState(20)
  const incersCout=()=>setCount(count+1)
  const dicresCout=()=>setCount(count-1)
  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={incersCout}>Incres</button>
      <button onClick={dicresCout}>dicres</button>
    </div>
  )
}

export default App;
