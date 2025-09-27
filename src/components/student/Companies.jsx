import { assets } from "../../assets/assets";

export const Companies = () => {
  return (
    <>
      <div className="md:flex hidden flex-col items-center w-full mt-10 py-6">
        <p className="text-gray-600 text-xl my-10">Trusted by learners from</p>
        <div className="flex items-center w-full justify-evenly px-[15%]">
          <img src={assets.microsoft_logo} alt="microsoft" />
          <img src={assets.accenture_logo} alt="accenture" />
          <img src={assets.paypal_logo} alt="paypal" />
          <img src={assets.adobe_logo} alt="adobe" />
          <img src={assets.walmart_logo} alt="walmart" />
        </div>
      </div>

   {/* for mobile screen */}

      <div className="flex flex-col items-center justify-center w-full mt-6 py-4 md:hidden">
        <p className="text-gray-600 text-[15px] my-10">Trusted by learners from</p>
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-3 w-full px-8 items-center justify-center">
          <img src={assets.microsoft_logo} alt="microsoft" />
          <img src={assets.accenture_logo} alt="accenture" />
          <img src={assets.paypal_logo} alt="paypal" />
          <img src={assets.adobe_logo} alt="adobe" />
          <img src={assets.walmart_logo} alt="walmart" />
        </div>
      </div>-
    </>
  );
};
