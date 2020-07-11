import React, { useState } from "react";

const CreatePinForm = () => {
  const [pinImage, setPinImage] = useState("");

  return (
    <form className="create-pin-form">
      <div className="pin-actions">
        <input type="text" placeholder="Categoría" />
        <button type="submit">Guardar</button>
      </div>
      <div className="create-pin-grid">
        <div>
          <img
            src={
              pinImage ||
              "https://via.placeholder.com/728x90.png?text=Sube tu imagen"
            }
            onError={(event) => {
              event.target.src =
                "https://via.placeholder.com/728x90.png?text=Link de imagen incorrecto";
            }}
            alt="Previsualización de la imagen"
          />
          <input
            type="url"
            onChange={(event) => setPinImage(event.target.value)}
            value={pinImage}
            placeholder="Url de la imagen"
          />
        </div>
        <div>
          <input type="text" placeholder="Añade un título" />
          <div>
            <img src="" alt="Avatar del usuario" />
            <strong>Nombre del usuario</strong>
          </div>
          <textarea placeholder="Explica en qué consite tu Pin"></textarea>
          <input type="url" placeholder="Añade un enlace de destino" />
        </div>
      </div>
    </form>
  );
};

export default CreatePinForm;
