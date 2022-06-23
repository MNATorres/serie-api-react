import { useState } from 'react';
import '../estilos/Buscador.css';

function Buscador({ searchEpisode }){
  const handleClick = (numero) => {
    searchEpisode(numero)
  }


  return(
    <div className="capitulos-buscador">
      <h2>Episodios</h2>
      {[1, 2, 3, 4, 5 ,6].map(numero => {
        return <button key={numero} onClick={() => handleClick(numero)}>{numero}</button>
      })}
      
    </div>
  )   
}

export default Buscador;