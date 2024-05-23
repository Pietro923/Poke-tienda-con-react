import React from 'react';
import '../estilos/cajas.css';

function Caja() {
  return (
    <div className='contenedorCaja'>
      <h4 className='tituloCaja'>
        Sceptile
      </h4>
      <div className='imagenCaja'>
        <img className='imagenPokemon' src={require('../imagenes/3.png')} alt='Treecko' />
      </div>
      <p className='descripcionCaja'>
        Tercera Evolucion
      </p>
      <button className='botonMasInfo'>
        Atrapar uno
      </button>
    </div>
  );
}

export default Caja;
