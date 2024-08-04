import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/card';
import dataArchive from '../data/data-ps2.json';
import Loading from '../components/loading';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function PageHome() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const itemsPerPage = 9;

  useEffect(() => {
    setData(dataArchive);
  }, []);

  const handleScroll = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1);
      setLoadingMore(false);
    }, 1000);
  };

  const filteredData = data ? data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];
  const currentItems = filteredData.slice(0, currentPage * itemsPerPage);

  return (
    <div className='bg-sky-800 w-screen h-full'>
      <div className="px-4 pt-4 w-full">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-400 rounded-md w-full"
        />
      </div>
      <div className='w-full flex px-4 pt-2'>
        <Link to={'/'} className='w-full mx-1'>
          <h1 className='rounded-md bg-amber-500 p-4 text-center font-bold text-white'>PS2</h1>
        </Link>
        <Link to={'/ps4-list'} className='w-full mx-1'>
          <h1 className='rounded-md bg-rose-500 p-4 text-center font-bold text-white'>PS4</h1>
        </Link>
      </div>
      <div className='w-full px-2 pt-2'>
        <div className='bg-black h-1 rounded-sm'></div>
      </div>
      <div >
        <InfiniteScroll
          dataLength={currentItems.length}
          next={handleScroll}
          hasMore={true}
          loader={
            <div className='flex w-screen h-screen justify-center items-center'>
              <Loading />
            </div>
          }
          endMessage={<p style={{ textAlign: 'center' }}>Não há mais itens para carregar.</p>} className="w-full h-full grid grid-cols-3 p-2 gap-2"
        >
          {currentItems.map((item, index) => (
            <Card key={index} title={item.title} link={item.link} image={item.imgSrc} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
