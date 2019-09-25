import React from 'react';
import './App.css';
import Dashboard from './Dashboard.js'
import IndividualCoin from './IndividualCoin.js'
import { BrowserRouter, Route, Switch } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/crypto' component={IndividualCoin}/>
        <Route exact path="/" component={Dashboard}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
