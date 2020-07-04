import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  login = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  updateEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="login-title">LOGIN</h2>
        <form className="login-form">
          <div className="form-controls">
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={this.state.email}
              onChange={this.updateEmail}
            />
            <input name="password" type="password" placeholder="Contraseña" />
          </div>
          <div className="form-actions">
            <div>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot?</a>
            </div>
            <button type="submit" onClick={this.login}>
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    );
  }
}
