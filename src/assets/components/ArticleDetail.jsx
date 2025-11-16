import React from 'react'

import { events } from '../../data';
import { useParams } from 'react-router-dom';



const ArticleDetail = () => {
  const { id } = useParams(); // get id from URL
  const event = events.find((e) => e.id.toString() === id); // find the event

  if (!event) return <p className="text-center mt-10">Event not found</p>;

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img src={event.img} className="w-full h-56 object-cover" alt={event.title} />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">{event.text}</p>
          <p className="mt-3 text-gray-700">{event.fullText}</p> {/* full content */}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;



































































// import React from 'react'
// import image from "../../../public/images/kribi.jpg";
// import { events } from '../../data';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const ArticleDetail = () => {
//   return (
//     <div className='max-w-4xl mx-auto p-4'>
      
//       <div className="bg-white w-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//   <img 
//     src={image} 
   
//     className="w-full h-56 object-cover"
//   />

 
//   <div className="p-5">
//     <h3 className="text-xl font-semibold text-gray-900">
      
//       cameroon kribi beach
//     </h3>

//     <p className="text-gray-600 mt-2 text-sm leading-relaxed">
//       A beautiful beach located in the coastal city of Kribi, Cameroon.
//     </p>
//   </div>

// </div>

//     </div>
//   )
// }

// export default ArticleDetail
