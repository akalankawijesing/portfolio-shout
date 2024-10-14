import react from "react";
import SearchInput from "./SearchInput";

function Search() {
  return (
    <>
      <div className="flex justify-center items-center p-4 text-white grid gap-4 col-span-6" >
        <form class="flex justify-center items-center p-4 bg-white text-gray gap-6 border border-gray-300 rounded-lg w-auto h-auto">
         
         <SearchInput/>
         <SearchInput/>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
