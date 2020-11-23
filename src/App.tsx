import React, { useState } from "react";
import "./App.css";
import Register from "./components/register";
import Header from "./components/Header";
import Login from "./components/login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Switch, Route, Redirect } from "react-router-dom";

function App(props: any) {
  const ProtectedRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
  }> = (props) => {
    const auth = localStorage.getItem("authenticated");

    return auth ? (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    ) : (
      <Redirect to="/login" />
    );
  };
  return (
    <div className="App">
      <Header />
      <Switch location={props.location}>
        {/* <Route component={Header} /> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/profile" component={Profile} />
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
