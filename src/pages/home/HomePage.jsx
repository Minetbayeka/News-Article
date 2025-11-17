import React, { useState } from "react";
import { events } from "../../data";
import image from "../../../public/images/kribi.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchFilter from "../../assets/components/SearchFilter";

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
        <div  className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white drop-shadow">
            NEWS & EVENTS
          </h2>
        </div>
      </div>

      {/* Filters + Search */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 border-b pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between  mt-10">
        <div className="flex space-x-6 text-sm mt-4 sm:mt-0">
          <button className="font-semibold text-gray-900">Filter</button>
          <button>All News ▾</button>
          <button>Archive ▾</button>
        </div>

        {/* SEARCH FILTER */}
        <SearchFilter onSearch={(value) => setSearchTerm(value)} />
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-500">No events found.</p>
        ) : (
          filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded overflow-hidden relative shadow-md transform transition duration-200 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-50"
            >
              <img
                src={event.img}
                alt="Event"
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{event.text}</p>

                <Link to={`/articleDetail/${event.id}`}>
                  <button className="text-blue-600 text-sm font-semibold">
                    Read More
                  </button>
                </Link>
              </div>

              <div className="absolute top-3 left-3 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-black text-xs font-semibold shadow">
                {event.publish}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
