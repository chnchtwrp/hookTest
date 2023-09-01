import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ButtonContext } from "./BtContext";

function App() {
  // const [count, setCount] = useState(0);
  const { btw, setBtw } = useContext(ButtonContext);

  return (
    <>
      <div>
        <a onClick={() => setBtw("world")}>
          <img src="/UpArrow.png" className="logo" alt="Arrow logo" />
        </a>
      </div>
      <h1>Swap word by useContext</h1>
      <div>
        <a onClick={() => setBtw("hello")}>
          <img src="/DownArrow.png" className="logo" alt="Arrow logo" />
        </a>
      </div>
    </>
  );
}

export default App;
