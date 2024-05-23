import React from 'react';
import '../estilos/cajas.css';

function Caja() {
  return (
    <div className='contenedorCaja'>
      <h4 className='tituloCaja'>
        Starter - Tipo planta
      </h4>
      <div className='imagenCaja'>
        <img className='imagenPokemon' src={require('../imagenes/1.png')} alt='Treecko' />
      </div>
      <p className='descripcionCaja'>
        Treecko es un Pokémon de tipo planta.
      </p>
      <button className='botonMasInfo'>
        Atrapar uno
      </button>
    </div>
  );
}

export default Caja;
