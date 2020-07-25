import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
  cache: new InMemoryCache(),
});

// Componente
function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
