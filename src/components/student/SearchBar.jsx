 import { IoIosSearch } from "react-icons/io";
 export const Search = () => {
  return (
    <div className="flex w-full items-center justify-center pt-5 bg-cyan-100/30">
      <div className="flex p-1 border-2 border-gray-400 w-[50%] justify-between px-5 bg-white rounded-2xl">
        <IoIosSearch className="size-10" />
         <input type="text" placeholder="Search for courses" className="w-full h-full py-2.5"  />
        <button type="input" className="bg-blue-600 text-white font-semibold px-4 my-1 rounded-xl">Search</button>
      </div>
    </div>
  );
};
