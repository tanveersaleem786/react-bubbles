import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
      <Route
        exact path="/"
        render={props => (
          <Login {...props} />
        )}
      />
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/bubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
