import React from 'react';

function Card({ title, link, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <img src={image} alt="imagem-jogo" className='w-full h-full border-2 border-blue-200'/>
      <h2 className="text-lg font-bold my-2 bg-green-600 p-2 text-center rounded-md text-white">{title}</h2>
      <button className='w-full p-2 bg-red-500 rounded-md active:bg-red-700'>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-white font-bold">Baixar Jogo</a>
      </button>
    </div>
  );
}

export default Card;
