import { useState } from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Capitulo from './componentes/Capitulo'


function App() {

  const [cap, setCap] = useState(null)

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
