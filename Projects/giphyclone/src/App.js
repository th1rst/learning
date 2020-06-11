import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapNavbar from './components/navbar/navbar.js'
import Gifbox from './components/GIFbox/gifbox.js'


function App() {
  return (
    <div className="App">
      <BootstrapNavbar />
      <Gifbox />
      
    </div>
    
  );
}

export default App;
