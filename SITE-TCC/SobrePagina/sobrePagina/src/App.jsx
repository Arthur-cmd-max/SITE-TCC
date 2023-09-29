import React from 'react'
import './App.css'

import dimage from "./images/dimage.png"

function App() {

  return (

    <div>

       <main>
      
      <button className='Home'>Home</button>
      <button className='Informacoes'> Informações</button>
      <button className='Sobre'>Sobre</button>
      <button className='Bibliografia'>Bibliografia</button>
      
       </main>


        <p>Sobre o Óculos:</p>
        <main>
            <img src={dimage} alt="imagem 3d do oculos" />
        </main>

        <main>
          <p>Intruções:</p>

          <h1>O óculos, ao fazer o reconhecimento de algum objeto, 
            acima da linha da cabeça, não proporciona a capacidade de identificar obstáculos que 
            estejam em maiores alturas, como pode-se verificar na Figura acima.</h1>
        </main>

        
    </div>
    
  )
    
   
}

export default App