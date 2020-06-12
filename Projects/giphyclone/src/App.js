import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapNavbar from './components/navbar/navbar.js';
import Gifbox from './components/GIFbox/gifbox.js';
import Heading from './components/Headings/h1'




function App() {
  const AppStyles = {

  }


  return (
    <div className="App" styles={AppStyles}>
      <BootstrapNavbar />
      <Heading />
      <Gifbox />
      
    </div>
  );
}

export default App;
