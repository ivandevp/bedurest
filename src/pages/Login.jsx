import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="login-title">LOGIN</h2>
        <form className="login-form">
          <div className="form-controls">
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="form-actions">
            <div>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot?</a>
            </div>
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    );
  }
}
