import { FaArrowRightLong } from "react-icons/fa6";
export const CallToAction = () => {
  return (
    <div className="flex items-center flex-col text-xl py-8">
      <h1 className="text-3xl font-medium">Learn anything, anytime, anywhere</h1>
      <p>One platform, endless learning opportunities</p>
      <div className="flex gap-5 mt-5 items-center">
        <button className="bg-blue-700 px-6 py-4 text-white rounded-xl">Get started</button>
        <span className="flex text-3xl font-medium gap-3 pr-3">
          Learn more <FaArrowRightLong className="size-9 pt-3" />
        </span>
      </div>
    </div>
  );
};
