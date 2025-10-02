import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 text-white md:flex hidden  justify-evenly text-center w-full py-10">
        <div className=" md:w-[30%] flex flex-col  justify-center items-center mb-4">
          <div className="flex font-bold text-xl  md:text-2xl mb-6 md:mb-8">
            <img
              src={assets.logo2}
              alt="logo"
              className="w-8 md:w-12 lg:w-12 cursor-pointer"
            />
            <span className="ml-1.5 pt-1">EduSphere</span>
          </div>

          <p className="text-[14px] px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="  mx-8 py-8 md:flex flex-col">
          <h2>Company</h2>
          <div className=" flex md:flex-col mt-3 gap-2 text-[15px]">
            <h4>
              <a href="#">Home</a>
            </h4>
            <h4>
              <a href="#">About us</a>
            </h4>
            <h4>
              <a href="#">Contact us</a>
            </h4>
            <h4>
              <a href="#">Privacy policy</a>
            </h4>
          </div>
        </div>

        <div className="w-[30%] hidden md:flex flex-col ">
          <h3 className="mb-6">Subscribe to our newsletter</h3>
          <p className="text-[14px] mb-6">
            The latest news, articles, and resources, sent to your inbox
          </p>
        
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-600 text-white outline-none p-2 m-3 rounded-[5px]"
          />
          <button type="submit" className="bg-blue-700 p-1 ml-2 rounded-[5px]">
            Subscribe
          </button>
        </div>
      </div>

      {/* // for mobile phone */}

      <div className="bg-gray-900 text-white flex  flex-col justify-evenly text-center w-full py-10 md:hidden">
        <div className="  flex flex-col  justify-center items-center mb-4">
          <div className="flex font-bold text-xl  md:text-2xl mb-6 md:m">
            <img
              src={assets.logo2}
              alt="logo"
              className="w-8 md:w-12 lg:w-12 cursor-pointer"
            />
            <span className="ml-1.5 pt-1">EduSphere</span>
          </div>

          <p className="text-[14px] px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="  mx-8 py-8 md:flex flex-col">
          <h2>Company</h2>
          <div className=" flex md:flex-col mt-3 gap-2 text-[15px]">
            <h4>
              <a href="#">Home</a>
            </h4>
            <h4>
              <a href="#">About us</a>
            </h4>
            <h4>
              <a href="#">Contact us</a>
            </h4>
            <h4>
              <a href="#">Privacy policy</a>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};
