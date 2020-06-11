import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapNavbar from './components/navbar/navbar.js';
import Gifbox from './components/GIFbox/gifbox.js';




function App() {
  return (
    <div className="App" style={{backgroundColor: "white"}}>
      <BootstrapNavbar />
      
      <Gifbox />
    </div>
    
  );
}

export default App;
