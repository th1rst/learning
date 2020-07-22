import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SingleRecipe from "./pages/SingleRecipe"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import AlleRezepte from "./pages/categories/AlleRezepte"
import BesonderesUndBeilagen from "./pages/categories/BesonderesUndBeilagen"
import Brot from "./pages/categories/Brot"
import Eintoepfe from "./pages/categories/Eintoepfe"
import FleischFischGefluegel from "./pages/categories/FleischFischGefluegel"
import GrillenUndBBQ from "./pages/categories/GrillenUndBBQ"
import KuchenSuessesTorten from "./pages/categories/KuchenSuessesTorten"
import LikoereSpezialitaeten from "./pages/categories/LikoereSpezialitaeten"
import Salate from "./pages/categories/Salate"
import SaucenDips from "./pages/categories/SaucenDips"
import SlowCooking from "./pages/categories/SlowCooking"
import Suppen from "./pages/categories/Suppen"
import SearchResults from "./pages/SearchResults"
import Article from "./pages/Article"
import 'bootstrap/dist/css/bootstrap.min.css';
import DataPrivacy from './pages/DataPrivacy';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/kategorie/alle-rezepte" component={AlleRezepte} />
      <Route exact path="/kategorie/besonderes-und-beilagen" component={BesonderesUndBeilagen} />
      <Route exact path="/kategorie/brot" component={Brot} />
      <Route exact path="/kategorie/eintoepfe" component={Eintoepfe} />
      <Route exact path="/kategorie/fleisch-fisch-gefluegel" component={FleischFischGefluegel} />
      <Route exact path="/kategorie/grillen-und-bbq" component={GrillenUndBBQ} />
      <Route exact path="/kategorie/kuchen-suesses-torten" component={KuchenSuessesTorten} />
      <Route exact path="/kategorie/likoere-spezialitaeten" component={LikoereSpezialitaeten} />
      <Route exact path="/kategorie/salate" component={Salate} />
      <Route exact path="/kategorie/slow-cooking" component={SlowCooking} />
      <Route exact path="/kategorie/saucen-und-dips" component={SaucenDips} />
      <Route exact path="/kategorie/suppen" component={Suppen} />
      <Route exact path="/rezepte/:slug" component={SingleRecipe} />
      <Route exact path="/suche/:slug" component={SearchResults} />
      <Route exact path="/artikel/:slug" component={Article} />
      <Route exact path="/datenschutz" component={DataPrivacy} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
