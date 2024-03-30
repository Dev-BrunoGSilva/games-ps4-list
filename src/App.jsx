import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Ways } from './routes/ways';

function App() {
  return (
    <RouterProvider router={Ways} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
