import React, { useState } from "react";
import { customFetch } from "../utils/fetch";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await customFetch('/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          image,
          isAdmin,
        }),
      });
      const { error, data } = await response.json();
      console.log("usuario de la api", error, data);
      if (error) {
        setError(error);
      } else {
        setUser(data);
        setError(null);
      }
      setLoading(false);
    } catch (error) {
      console.error("Ocurrió un error", error);
      setLoading(false);
    }
  };

  if (user) {
    window.location.replace("/login");
    return null;
  }

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
          <label>
            <input
              name="is-admin"
              type="checkbox"
              value={isAdmin}
              onChange={(event) => setIsAdmin(event.target.checked)}
            />
            Es administrador?
          </label>
        </div>
        {error ? <p>{error}</p> : null}
        <div className="form-actions">
          <button type="submit" onClick={signup} disabled={loading}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
