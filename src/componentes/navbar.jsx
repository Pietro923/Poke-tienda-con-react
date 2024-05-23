import React from 'react';

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <h1>
      <img style={contendorImagen}
             src={require('../imagenes/logo.png')} alt='treecko'/>
      </h1>

      <ul style={navListStyle}>
        <li style={navItemStyle}><a href="/" style={linkStyle}>Inicio</a></li>
        <li style={navItemStyle}><a href="/nosotros" style={linkStyle}>Pokebolas</a></li>
        <li style={navItemStyle}><a href="/servicios" style={linkStyle}>Poke Alimento</a></li>
        <li style={navItemStyle}><a href="/contacto" style={linkStyle}>Contacto</a></li>
      </ul>
    </nav>
  );
}
const contendorImagen = {
    width: '50px', // Ancho deseado para la imagen
    height: 'auto', // Altura automática para mantener la proporción
}
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
};

const navListStyle = {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: '0',
    padding: '0',
  };

const navItemStyle = {
  marginRight: '1rem',
};
const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };
  const linkHoverStyle = {
    backgroundColor: '#555',
  };

export default Navbar;