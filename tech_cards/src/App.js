import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import Home from "./pages/home";
import Deck from "./pages/deck";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Tech Cards</h1>
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/deck/:name">
              <Deck />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
