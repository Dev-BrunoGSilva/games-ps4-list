import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card';
import dataArchive from '../src/data/data.json'

function App() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
     setData(dataArchive);
  //   axios.get('../dist/data.json')
  //     .then(response => setData(response.data))
  //     .catch(error => console.error('Error fetching JSON: ', error));
  }, []);
//  useEffect(() => {
   // axios.get('../src/data/data.json')
//      .then(response => setData(response.data))
//      .catch(error => console.error('Error fetching JSON: ', error))  }, []);

  const filteredData = data ? data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className='w-screen h-full bg-gray-500'>
      <div className="m-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 p-4 items-center justify-center">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card key={index} title={item.title} link={item.link} /> // Use o componente Card
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;
