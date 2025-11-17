import React, { useState } from "react";
import { events } from "../../data";
import image from "../../../public/images/kribi.jpg";
import SearchFilter from "../../assets/components/SearchFilter";
import ArticleCard from "../../assets/components/ArticleCard";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // FILTER EVENTS BY TITLE
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-24 mx-auto max-w-6xl">
      {/* Hero Banner */}
      <div className="w-full h-60 relative flex items-center justify-center">
        <img src={image} alt="Hero" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white drop-shadow">
            NEWS & EVENTS
          </h2>
        </div>
      </div>

      {/* Filters + Search */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 border-b pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10">
        <div className="flex space-x-6 text-sm mt-4 sm:mt-0">
          <button className="font-semibold text-gray-900">Filter</button>
          <button>All News ▾</button>
          <button>Archive ▾</button>
        </div>

        {/* SEARCH FILTER */}
        <SearchFilter onSearch={(value) => setSearchTerm(value)} />
      </div>

      {/* Articles */}
      <ArticleCard events={filteredEvents} />
    </div>
  );
};

export default HomePage;
