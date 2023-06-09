import './App.css';
import Boton from './componentes/boton';
import logoclick from './img/logo2.png';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  const [numClicks,setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <h1>Contador de Clicks </h1>
        <img className='logo'
            src={logoclick}
            alt='Logo'/>
      </div>
      <div className='contenedor-contador'>
      <Contador numClicks={numClicks} />
      <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/>
      <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
