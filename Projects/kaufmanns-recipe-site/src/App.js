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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/category/alle-rezepte" component={AlleRezepte} />
      <Route exact path="/category/besonderes-und-beilagen" component={BesonderesUndBeilagen} />
      <Route exact path="/category/brot" component={Brot} />
      <Route exact path="/category/eintoepfe" component={Eintoepfe} />
      <Route exact path="/category/fleisch-fisch-gefluegel" component={FleischFischGefluegel} />
      <Route exact path="/category/grillen-und-bbq" component={GrillenUndBBQ} />
      <Route exact path="/category/kuchen-suesses-torten" component={KuchenSuessesTorten} />
      <Route exact path="/category/likoere-spezialitaeten" component={LikoereSpezialitaeten} />
      <Route exact path="/category/salate" component={Salate} />
      <Route exact path="/category/slow-cooking" component={SlowCooking} />
      <Route exact path="/category/saucen-und-dips" component={SaucenDips} />
      <Route exact path="/category/suppen" component={Suppen} />
      <Route exact path="/recipes/:slug" component={SingleRecipe} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
