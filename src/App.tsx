import React, { useState } from "react";
import "./App.css";
import Register from "./components/register";
import Header from "./components/Header";
import Login from "./components/login";
import Home from "./components/Home";
import { Switch, Link, Route, Redirect } from "react-router-dom";

function App(props: any) {
  return (
    <div className="App">
      <Header />
      <Switch location={props.location}>
        {/* <Route component={Header} /> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          path="/"
          render={() => (
            <div>
              <h2>404. Not Found</h2>
            </div>
          )}
        />
        {/* <Redirect path="/home" /> */}
      </Switch>
      {/* <Register /> */}
    </div>
  );
}

export default App;
