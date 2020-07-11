import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="container">
      <h2 className="login-title">SIGN UP</h2>
      <form className="login-form">
        <div className="form-controls">
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            name="image"
            type="url"
            placeholder="Link de tu imagen"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        {/* {this.state.error ? <p>{this.state.error}</p> : null} */}
        <div className="form-actions">
          <button
            type="submit"
            // onClick={this.login}
            // disabled={this.state.loading}
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
