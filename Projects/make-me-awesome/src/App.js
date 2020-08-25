import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import Overview from "./pages/Overview";
import Error404 from "./pages/Error404";
import Personal from "./pages/Personal";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import FAQ from "./pages/FAQ"
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/personal" component={Personal} />
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/forgot" component={ForgotPassword}/>
      <Route exact path="/activity" component={Activity} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/overview" component={Overview} />
      <Route exact path="/FAQ" component={FAQ} />
      <Route exact path="/termsofservice" component={TermsOfService} />
      <Route exact path="/privacypolicy" component={PrivacyPolicy} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
