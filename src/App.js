import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Navbar from './Navbar';

function App() {
  const [userName, setUserName] = useState("aybike")
  let myName = "aybike"
  const changeName = () => {
    myName = "ceylan"
    console.log("ceylan");
  }
  return (
    <div className="App">
      <Navbar />
      <h1>Hello React!</h1>
      <h5>{myName}</h5>
      <button onClick={changeName}>Değiştir</button>
      <hr />
      <h4>{userName}</h4>
      <button onClick={() => setUserName("ceylan")}>değiştir</button>
      <hr />
      <Counter />
    </div>

  );
}

export default App;
