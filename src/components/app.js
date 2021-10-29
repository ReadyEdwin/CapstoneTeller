import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Nav from "./nav"
import Home from "./pages/home"
import AddFortune from "./pages/add-fortune"
import Fortune from "./pages/fortune"



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fortune" component={Fortune} />

          <Route path="/add-fortune" component={AddFortune} />
        </Switch>
      </div>
    );
  }
}
