import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex items-center h-screen w-screen justify-center">
      <Notification/>
    </main>
  )
}

export default App;
