
import './App.css';
import SongsList from './components/SongsList';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <SongsList />
    </div>
  );
}

export default App;
