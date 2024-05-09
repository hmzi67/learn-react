import { useState } from "react";

import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  let todos = [
    {
      id: 0,
      todo: "Coding",
    },
    {
      id: 1,
      todo: "chatgpt",
    },
    {
      id: 2,
      todo: "gemini",
    },
    {
      id: 3,
      todo: "ai",
    },
  ];

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    setCount(count - 1);
  };

  const handleClick3 = () => {
    setCount(0);
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };
  console.log(data);

  return (
    <>
      {count} <br />
      <Button onClick={handleClick} variant="contained">
        Increment
      </Button>
      <Button onClick={handleClick3} variant="contained">
        Reset
      </Button>
      <Button onClick={handleClick2} variant="contained">
        Decrement
      </Button>
      <hr />
      <br />
      <TextField
        onChange={handleChange}
        value={data}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <ul>
        {todos.map((index) => {
          return <li>{index.todo}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
