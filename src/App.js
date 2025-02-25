import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("name");
  const [password, setPassword] = useState("password");

  const userNameHandler = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <h1>React App 03</h1>
      name : <input type="text" value={username} onChange={userNameHandler} />
      password :
      <input
        type="password"
        value={password}
        onChange={passwordHandler}
        name="password"
      />
    </div>
  );
}

export default App;
