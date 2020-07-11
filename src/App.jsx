import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

// Componente
function App() {
  /**
   * Sin react-router-dom
   */
  // const { pathname, search } = window.location;

  // switch (pathname) {
  //   case "/login":
  //     return <Login />;
  //   case "/dashboard":
  //     return <Dashboard />;
  //   case "/signup":
  //     return <Signup />;
  //   case "/home":
  //   default:
  //     return <Home name={search.slice(6)} />;
  // }
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
