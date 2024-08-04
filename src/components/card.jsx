import React from "react";

function Card({ title, link, image, euro, american, description }) {
  const getPlayability = (status) => {
    switch (status) {
      case 'Playable':
        return 'JOGÁVEL';
      case 'Minor Issues':
        return 'FUNCIONA';
      case 'Major Issues':
        return 'PROBLEMAS';
      case 'Unplayable':
        return 'INJOGÁVEL';
      case 'Not Available':
        return 'INDISPONÍVEL';
      case 'Available':
        return 'DISPONÍVEL';
      case 'PS2 Classics':
        return 'OFICIAL';
      case '?':
        return '-';
      default:
        return status;
    }    
  };

  const euroPlayability = getPlayability(euro);
  const americanPlayability = getPlayability(american);
  const descriptionPlayability = getPlayability(description);

  return (
    <div className="bg-white rounded-lg shadow-md p-2 flex flex-col w-full h-full">
      <img
        src={image}
        alt="imagem-jogo"
        loading="lazy"
        className="w-full h-full border-2 border-blue-200"
      />
      <h2 className="truncate text-lg font-bold mt-2 bg-green-600 pb-2 px-2 text-center rounded-md text-white">
        {title}
      </h2>
      <div className="w-full flex">
        <h2 className="w-full bg-yellow-500 border-2 text-center">Europeu</h2>
        <h2 className="w-full bg-sky-500 border-2 text-center">Americano</h2>
        <h2 className="w-full bg-red-500 border-2 text-center">Japones</h2>
      </div>
      <div className="w-full flex">
        <h2 className="w-full bg-yellow-500 border-2 text-center">{euroPlayability}</h2>
        <h2 className="w-full bg-sky-500 border-2 text-center">{americanPlayability}</h2>
        <h2 className="w-full bg-red-500 border-2 text-center">{descriptionPlayability}</h2>
      </div>
      <button className="w-full p-2 bg-purple-500 rounded-md active:bg-red-700">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold text-sm">
          Baixar Jogo
        </a>
      </button>
    </div>
  );
}

export default Card;
