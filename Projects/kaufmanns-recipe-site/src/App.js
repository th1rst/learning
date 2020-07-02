import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Recipe from "./pages/Recipe"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipes/:slug" component={Recipe} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
