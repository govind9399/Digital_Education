import { useState } from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleInputData = (event) => {
    event.preventDefault();

    const LoginData = {
      Email: email,
      Password: password,
    };
    console.log(LoginData);
  };

  return (
    <>
         <NavLink to="/">
          <div className="flex font-bold text-xl  md:text-2xl">
            <img
              src={assets.logo2}
              w
              alt="logo"
              className="w-7 md:w-12 lg:w-12 cursor-pointer "
            />
            <span className="ml-1.5 pt-1 md:text-2xl text-[20px]">
              EduSphere
            </span>
          </div>
        </NavLink>

        <div className="flex flex-col items-center justify-center w-100% h-[90vh]">
          <h1 className="text-3xl font-semibold">Welcome back</h1>

          <form
            onSubmit={handleInputData}
            className="flex flex-col  justify-center gap-5 items-center w-[50%] h-[60%] md:gap-8"
          >
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={email}
              onChange={handleEmailInput}
              className="w-[280px] bg-stone-200 p-2 md:w-[400px]"
            />
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={password}
              onChange={handlePasswordInput}
              className="w-[280px] bg-stone-200 p-2 md:w-[400px]"
            />
            <NavLink to="./pages/studentDashboard">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold w-[270px] p-3 rounded-xl md:w-[400px] "
              >
                Log in
              </button>
            </NavLink>

            <NavLink to="/forget-password">
              <span className="text-blue-700"> Forget password</span>
            </NavLink>

            <p>
              Don't have an accout?{" "}
              <NavLink to="/signup" className="text-blue-700">
                Sign up
              </NavLink>{" "}
            </p>
          </form>
        </div>
     </>
  );
};
