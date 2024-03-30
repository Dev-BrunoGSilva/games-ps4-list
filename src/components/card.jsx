import React from 'react';

function Card({ title, link, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 flex flex-col w-full h-full">
      <img src={image} alt="imagem-jogo" loading="lazy" className='w-full h-full border-2 border-blue-200'/>
      <h2 className="truncate text-lg font-bold my-2 bg-green-600 pb-2 px-2 text-center rounded-md text-white">{title}</h2>
      <button className='w-full p-2 bg-red-500 rounded-md active:bg-red-700'>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm">Baixar Jogo</a>
      </button>
    </div>
  );
}

export default Card;
