import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import "./App.css";

// Componente
function App() {
  const { pathname, search } = window.location;

  switch (pathname) {
    case "/login":
      return <Login />;
    case "/dashboard":
      return <Dashboard />;
    case "/signup":
      return <Signup />;
    case "/home":
    default:
      return <Home name={search.slice(6)} />;
  }
}

export default App;
