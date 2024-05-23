import React from 'react';
import '../estilos/cajas.css';

function Caja() {
  return (
    <div className='contenedorCaja'>
      <h4 className='tituloCaja'>
       Grovyle
      </h4>
      <div className='imagenCaja'>
        <img className='imagenPokemon' src={require('../imagenes/2.png')} alt='Treecko' />
      </div>
      <p className='descripcionCaja'>
        Segunda evolucion
      </p>
      <button className='botonMasInfo'>
        Atrapar uno
      </button>
    </div>
  );
}

export default Caja;
