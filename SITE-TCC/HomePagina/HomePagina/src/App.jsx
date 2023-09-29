import React from 'react'
import './App.css'

import logo from "./images/logo.png"
import oculin from "./images/oculin.png"

function App() {

  return (

  <div>

    <div>
      <main>
      
      <button className='Home'>Home</button>
      <button className='Informacoes'> Informações</button>
      <button className='Sobre'>Sobre</button>
      <button className='Bibliografia'>Bibliografia</button>
      
      </main>

    </div>
      <main>
        
        <img src={logo} alt="Logo" />
       
      </main>

      <main>
        <h2>Aprimorando cada vez mais a tecnologia</h2>
      </main>
      
   
    <header>
    
    <button>Saiba mais</button>
    
    </header>

        <main>
          <h3>PRONTO PARA A INOVAÇÃO!!</h3>
        </main>

        <main>
        
        <img src={oculin} alt="imagem do óculos" />
        
        </main>
    </div>

    
  
  )
    
   
}

export default App