import React from 'react';

const InternshipCards = ({ img, title }) => {
  return (
    <div className="intern-card bg-[#0e2431] shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
      <p className="mt-4 text-xl font-semibold text-gray-800 bg-white pl-4 pr-4 pt-2 pb-2 rounded-lg">{title}</p>
      <a href="#" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Enroll Now
      </a>
    </div>
  );
};

export default InternshipCards;
