import { NavLink } from "react-router-dom";
import { useState } from "react";
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsername = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleInputData = (event) => {
    event.preventDefault();

    const Signup = {
      Name: name,
      Email: email,
      Password: password,
    };
    console.log(Signup);
  };
  return (
    <>
      <div className="main flex justify-center items-center w-[100%] h-[100vh] flex-col">
        <h1>Sign Up</h1>
        <form onSubmit={handleInputData} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            required
            autoComplete="off"
            value={name}
            onChange={handleUsername}
            className="w-[280px] bg-stone-200 p-2 
md:w-[400px]"
          />
          <input
            type="email"
            placeholder="Email"
            required
            autoComplete="off"
            value={email}
            onChange={handleEmail}
            className="w-[280px] bg-stone-200 p-2 
md:w-[400px]"
          />

          <input
            type="password"
            placeholder="Password"
            required
            autoComplete="off"
            value={password}
            onChange={handlePassword}
            className="w-[280px] bg-stone-200 p-2 
md:w-[400px]"
          />
          <input
            type="password"
            placeholder=" Confirm Password"
            required
            autoComplete="off"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            className="w-[280px] bg-stone-200 p-2 
md:w-[400px]"
          />
          <NavLink to="./pages/studentDashboard">
            <button
              type="submit"
              className="bg-blue-600 text-white 
font-semibold w-[270px] p-3 rounded-xl 
md:w-[400px] "
            >
              Sign Up
            </button>
          </NavLink>
        </form>
        <p>
          Already have an account?{" "}
          <NavLink to="Login" className="text-blue-700">
            {" "}
            Login
          </NavLink>
        </p>
      </div>
    </>
  );
};
