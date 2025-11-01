// import { useState } from "react";

import "./App.css";
import CountBox from "./components/CountBox";
import counterStore from "./stores/counterStore";

function App() {
  // const [count, setCount] = useState(0);
  const { count, increase, increaseBy, decrease, decreaseBy } = counterStore(); // 윗 줄의 useState말고 zustand로 쓰기

  return (
    <div className="App">
      <h1> COUNT : {count} </h1>
      <button onClick={increase}>UP</button>
      <button onClick={() => increaseBy(10)}>10 UP</button>
      <button onClick={decrease}>DOWN</button>
      <button onClick={() => decreaseBy(-10)}>10 DOWN</button>

      {/* <button onClick={increase}>DOWN</button> */}

      {/* ↓ props로 전달안해도 되서, 삭제 */}
      {/* <CountBox count={count} /> decrease*/}

      <CountBox />
    </div>
  );
}

export default App;
