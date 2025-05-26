import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Missions from "./missions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Warframe Mission Roullete!</h1>
      <Missions />
    </>
  );
}

export default App;
