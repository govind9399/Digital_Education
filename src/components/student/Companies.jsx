import { assets } from "../../assets/assets";

export const Companies = () => {
  return (
    <div className="flex flex-col items-center w-full pt-5">
      <p className="text-gray-600 text-xl my-5">Trusted by learners from</p>
      <div className="flex items-center w-full justify-evenly px-[15%]">
        <img src={assets.microsoft_logo} alt="microsoft" />
        <img src={assets.accenture_logo} alt="accenture" />
        <img src={assets.paypal_logo} alt="paypal" />
        <img src={assets.adobe_logo} alt="adobe" />
        <img src={assets.walmart_logo} alt="walmart" />
      </div>
    </div>
  );
};
