import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SingleRecipe from "./pages/SingleRecipe"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import RecipeCategoryPage from "./pages/RecipeCategoryPage"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/category/:slug" component={RecipeCategoryPage} />
      <Route exact path="/recipes/:slug" component={SingleRecipe} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
