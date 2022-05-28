import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import CampaignDetail from "./components/campaign-detail";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/campaign-detail/:id" component={CampaignDetail} />
  </Switch>
);

export default App;
