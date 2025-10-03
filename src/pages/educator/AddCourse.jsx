export const AddCourse = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="courseTitle">Course Title</label>
      <input
        id="courseTitle"
        type="text"
        placeholder="Type here"
        className="p-3 border border-gray-500"
      />

      <label htmlFor="courseHeadings">Course Headings</label>
      <input
        id="courseHeadings"
        type="text"
        placeholder="Type here"
        className="p-3 border border-gray-500"
      />

      <label htmlFor="courseDescription">Course Description</label>
      <input
        id="courseDescription"
        type="text"
        placeholder="Type here"
        className="p-3 border border-gray-500"
      />

      <label htmlFor="coursePrice">Course Price</label>
      <input
        id="coursePrice"
        type="number"
        placeholder="Type here"
        className="p-3 border border-gray-500"
      />
      <button className="px-3 py-2 bg-black text-white w-[80px]">ADD</button>
    </div>
  );
};
