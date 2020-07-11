import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Layout.css";

const Layout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src="https://ucarecdn.com/948f3048-7eeb-4fc4-93fe-d55c3795d66a/"
            alt="Bedurest"
          />
        </div>

        <form className="search-form">
          <input type="search" />
        </form>

        <div className="user">
          <strong>{user.name}</strong>
          <img className="avatar" src={user.image} alt="Avatar" />
          <div>
            <span
              role="img"
              aria-label="Open/close menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ⬇️
            </span>
            {isMenuOpen ? (
              <nav className="user-menu">
                <ul>
                  <li>
                    <Link to="/dashboard">Crear pin</Link>
                  </li>
                  <li onClick={logout}>Salir</li>
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
