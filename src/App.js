import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("name");
  const [password, setPassword] = useState("password");
  const [email, setEmail] = useState("email");
  const [name, setAge] = useState("age");
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [hobbies, setHobbies] = useState([]);

  const userNameHandler = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const mailHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const ageHandler = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  const genderHandler = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const countryHandler = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  const hobbyHandler = (event) => {
    if (event.target.checked) {
      console.log(event.target.value);
      if (!hobbies.includes(event.target.value)) {
        setHobbies([...hobbies, event.target.value]);
        console.log(hobbies);
      }
    }
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
      email : <input type="email" value={email} onChange={mailHandler} />
      age :{" "}
      <input type="number" name="age" value={name} onChange={ageHandler} />
      gender : <br /> <hr />
      <label>
        male :
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male" ? true : false}
          onChange={genderHandler}
        />
      </label>
      <label>
        female :
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female" ? true : false}
          onChange={genderHandler}
        />
      </label>
      <label>
        country :
        <select value={country} onChange={countryHandler}>
          <option value={""}>select country</option>
          <option value={"india"}>India</option>
          <option value={"usa"}>USA</option>
          <option value={"uk"}>UK</option>
          <option value={"canada"}>Canada</option>
        </select>
      </label>
      <label>
        hobbies : <br />
        reading
        <input
          type="checkbox"
          name="hobbies"
          value="reading"
          onChange={hobbyHandler}
        />
        writing
        <input
          type="checkbox"
          name="hobbies"
          value="writing"
          onChange={hobbyHandler}
        />
        dancing
        <input
          type="checkbox"
          name="hobbies"
          value="dancing"
          onChange={hobbyHandler}
        />
        playing
        <input
          type="checkbox"
          name="hobbies"
          value="playing"
          onChange={hobbyHandler}
        />
      </label>
    </div>
  );
}

export default App;
