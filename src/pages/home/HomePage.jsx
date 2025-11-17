import React from "react";
import { events } from "../../data";
import image from "../../../public/images/kribi.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
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

      {/* Filters */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 flex items-center justify-between border-b pb-4  ">
        <div className="flex space-x-6 text-sm mt-24">
          <button className="font-semibold text-gray-900">Filter</button>
          <button>All News ▾</button>
          <button>Archive ▾</button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 py-10 ">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white  rounded overflow-hidden relative
          shadow-md transform transition duration-200 hover:scale-105
      hover:-translate-y-2 hover:shadow-2xl hover:z-50"
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
            <div className=" left-0  absolute inset-0 bg-blue-100 rounded-full w-12 h-12 text-black text-center">
              <p className="">{event.publish}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
