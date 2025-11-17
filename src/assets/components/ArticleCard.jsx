import React from "react";
import { Link } from "react-router-dom";

// ArticleCard component to display a grid of article/event cards

const ArticleCard = ({ events }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        events.map((event) => (
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
  );
};

export default ArticleCard;
