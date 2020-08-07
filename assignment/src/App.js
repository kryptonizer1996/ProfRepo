import React, { Component } from "react";
import "./styles.css";
import TestJSON from "/src/TestJSON.js";
import Card from "/src/Card";
import Modal from "/src/Modal.js";
import Heading from "/src/Heading.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calendar from "/src/Calendar";

class App extends Component {
  state = {
    val: TestJSON
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Heading />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <div>
                    <Card data={this.state.val} />
                  </div>
                );
              }}
            />
            <Route path="/calendar" exact component={Calendar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
