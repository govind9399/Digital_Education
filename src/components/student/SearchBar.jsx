import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const Search = ({data}) => {

     const navigate = useNavigate()
     const [input, setInput] = useState(data?data:"")

     const onSearchHandler = (e)=>{
        e.preventDefault()
        navigate('/courses-list/'+input)
     }
  return (
    <form onSubmit={onSearchHandler} className="flex w-full items-center justify-center md:pt-8 bg-cyan-100/30 pb-2">
      <div className="flex md:p-1 border-2 border-gray-300 w-[80%]  md:w-[50%] justify-between md:px-5 bg-white rounded-2xl ">
        <IoIosSearch className="size-10" />
        <input onChange={(e)=>{
            return setInput(e.target.value)
        }} 
        value={input}
          type="text"
          placeholder="Search for courses"
          className="w-full h-full py-2.5 outline-none"
        />
        <button
          type="input"
          className="bg-blue-600 text-white font-semibold md:px-4 px-2 my-1 rounded-[10px] "
        >
          Search
        </button>
      </div>
    </form>
  );
};
