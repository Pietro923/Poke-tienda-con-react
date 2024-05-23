import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Derechos reservados locuras.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  //position: 'fixed', // Si quieres que el footer esté fijo en la parte inferior de la pantalla
  left: '0',
  bottom: '0',
  width: '100%',
  marginTop: '20px', // Esto depende de tus preferencias de diseño
};

export default Footer;
