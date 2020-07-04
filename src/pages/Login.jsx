import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      error: null,
      user: null,
    };
  }

  login = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      const { error, data } = await response.json();
      console.log("usuario de la api", error, data);
      if (error) {
        this.setState({ error });
      } else {
        this.setState({ user: data, error: null });
      }
      this.setState({ loading: false });
    } catch (error) {
      console.error("Ocurrió un error", error);
      this.setState({ loading: false });
    }
  };

  updateInputField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    if (this.state.user) {
      window.location.replace("/");
      return null;
    }

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
              onChange={this.updateInputField}
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.updateInputField}
            />
          </div>
          {this.state.error ? <p>{this.state.error}</p> : null}
          <div className="form-actions">
            <div>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot?</a>
            </div>
            <button
              type="submit"
              onClick={this.login}
              disabled={this.state.loading}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    );
  }
}
