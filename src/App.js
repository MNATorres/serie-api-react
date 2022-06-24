import { useState, useEffect } from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Capitulo from './componentes/Capitulo'

//92749
function App() {

  
  const apikey = 'api_key=133f4d8b4fed128b27fa0bb407956c56'
  const base = 'https://api.themoviedb.org/3'
  const fetchApi = async () => {
    const response = await fetch(`${base}/tv/92749?${apikey}&language=es-ES`)
    console.log(response.statusText)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const searchEpisode = (number) => {
    console.log(number)
  }

  return (
    <div className="App">
     <Buscador 
     searchEpisode={searchEpisode} />
     <Capitulo 
     capitulo='' />
    </div>
  );
}

export default App;
