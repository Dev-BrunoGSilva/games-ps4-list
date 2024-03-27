import React from 'react';

function Card({ title, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600">{link}</a>
    </div>
  );
}

export default Card;
