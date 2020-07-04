import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";

// Componente
function App() {
  const { pathname } = window.location;

  if (pathname === "/login") {
    return <Login />;
  }

  return <Home />;
}

export default App;
