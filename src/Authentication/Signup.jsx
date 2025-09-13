import { NavLink } from "react-router-dom";
import { Login } from "./Login";
import { useState } from "react";
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleInputData = (event) => {
    event.preventDefault();

    const Signup = {
      Name:name,
      Email:email,
      Password:password
    };
    console.log(Signup);
  };
  return (
    <>
      <div className="main">
        <h1>Sign Up</h1>
        <form onSubmit={handleInputData}>
          <input
            type="text"
            placeholder="Name"
            required
            autoComplete="off"
            value={name}
            onChange={handleUsername}
          />
          <input
            type="email"
            placeholder="Email"
            required
            autoComplete="off"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            required
            autoComplete="off"
            value={password}
            onChange={handlePassword}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <NavLink to="Login"> Login</NavLink>
        </p>
      </div>
    </>
  );
};
