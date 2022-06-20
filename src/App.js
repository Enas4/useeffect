import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      document.title = `chats ${count}`;
    } else {
      document.title = `chats`;
    }
  }, [count]);

  useEffect(() => {
    console.log("i m fine");
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

export default App;
