import { useState } from "react";
import { SiStudyverse } from "react-icons/si";
import { NavLink } from "react-router-dom";
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
      <div className="main ">
        <div className="header">
          <h1 className="flex text-3xl ml-[50px] pt-5 font-semibold ">
            <SiStudyverse className="mr-[15px] mt-1" />
            EduLearn
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center w-100% h-[90vh]">
          <h1 className="text-3xl font-semibold">Welcome back</h1>

          <form
            onSubmit={handleInputData}
            className="flex flex-col  justify-center gap-5 items-center w-[50%] h-[60%] "
          >
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={email}
              onChange={handleEmailInput}
              className="w-[80%] bg-stone-200 p-2"
            />
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={password}
              onChange={handlePasswordInput}
              className="w-[80%] bg-stone-200 p-2"
            />
            <NavLink to="./pages/studentDashboard">
              <button type="submit" className="bg-blue-600 text-white font-semibold w-[270px] p-3 rounded-xl ">
                Log in
              </button>
            </NavLink>

            <span className="text-blue-700"> Forget password</span>

            <p>
              Don't have an accout?{" "}
              <NavLink to="Signup" className="text-blue-700">
                Sign up
              </NavLink>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
