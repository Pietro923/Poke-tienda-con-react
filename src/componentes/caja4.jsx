import React from 'react';
import '../estilos/cajas.css';

function Caja() {
  return (
    <div className='contenedorCaja'>
      <h4 className='tituloCaja'>
        Mega Evolucion
      </h4>
      <div className='imagenCaja'>
        <img className='imagenPokemon' src={require('../imagenes/4.png')} alt='Treecko' />
      </div>
      <p className='descripcionCaja'>
        Mega
      </p>
      <button className='botonMasInfo'>
        Atrapar uno
      </button>
    </div>
  );
}

export default Caja;
