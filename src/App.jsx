import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./App.css";

// Componente
function App() {
  const [checked, setChecked] = React.useState(true);
  const { pathname, search } = window.location;

  if (pathname === "/login") {
    return <Login />;
  }

  if (pathname === "/dashboard") {
    return <Dashboard />;
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={(event) => {
            setChecked(!event.target.checked);
          }}
        />
        Desmontar componente
      </label>
      {checked ? <Home name={search.slice(6)} /> : null}
    </>
  );
}

export default App;
