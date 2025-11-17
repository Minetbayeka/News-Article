import { Mic, SearchIcon } from "lucide-react";
import React from "react";

const SearchFilter = ({ onSearch }) => {
  return (
    <div className="mt-10">
      <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-3 sm:px-4 py-2 max-w-full sm:max-w-lg shadow-sm mb-6">
        <SearchIcon className="h-5 w-5 text-gray-400 dark:text-gray-300" />

        <input
          type="text"
          placeholder="Search Events"
          className="flex-1 bg-transparent dark:text-gray-100 focus:outline-none px-2 text-sm"
          onChange={(e) => onSearch(e.target.value)} // send text back
        />

        <Mic className="h-5 w-5 text-gray-400 dark:text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchFilter;
