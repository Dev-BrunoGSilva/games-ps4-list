import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Card from './components/card';
import dataArchive from '../src/data/data.json'
// import dataArchive from '../dist/data.json'

function App() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
     setData(dataArchive);
  }, []);

  const filteredData = data ? data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className='bg-sky-800 w-screen h-full'>
      <h1></h1>
      <div className="px-4 pt-4 w-full">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-400 rounded-md w-full"
        />
      </div>
      <div className="w-full h-full">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card key={index} title={item.title} link={item.link} image={item.imgSrc} /> // Use o componente Card
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;
