import React from 'react';

function Card() {
  // Obtener los datos del usuario desde localStorage
  const userData = JSON.parse(localStorage.getItem('datosUsuario'));

  if (!userData) {
    return <div>No se encontraron datos de usuario.</div>;
  }

  return (
    <div className="card">
      <h2>Tarjeta de Presentación</h2>
      <p>Nombre: {userData.name}</p>
      <p>Correo: {userData.email}</p>
      <img src={userData.imagen} alt="Imagen de perfil" />

    </div>
  );
}

export default Card;
