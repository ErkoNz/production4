import React from 'react';
import './App.css';
import Nav from './Nav';

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import CovidApp from './Covid/CovidApp';
// const CovidApp = React.lazy(() => import('./Covid/CovidApp'));

import CovidSK from './Covid/CovidSK';
import GrafyKrajina from './Covid/GrafyKrajina';
// const CovidSK = React.lazy(() => import('./Covid/CovidSK'));


function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={CovidApp} exact />
          <Route path="/Covid/CovidSK" component={CovidSK} />
          <Route path="/Covid/CovidApp" exact component={CovidApp} />
          <Route path="/Covid/CovidApp/:id" component={GrafyKrajina} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
