import React from 'react'
import './App.css'

function App() {

  return (

    <div>

       <main>
      
      <button className='Home'>Home</button>
      <button className='Informacoes'> Informações</button>
      <button className='Sobre'>Sobre</button>
      <button className='Bibliografia'>Bibliografia</button>
      
       </main>


        <p className='Titulo'>Bibliografia</p>

        <br/>

        <p className='Subtitulo'>Integrantes:</p>

        <div>

           <img className='img1' src="./images/alex.png" alt="Alex" />
           <img className='img2' src="./images/arthur.png" alt="Arthur" />
           <img className='img3' src="./images/linguine.png" alt="Linguine" />

          <br/>

            <p className='p1'>Alex Lopes</p>
            <p className='p2'>Arthur Zaffalon</p>
            <p className='p3'>Arthur Santos</p>

        </div>

            <main>
              <h1>
            Ajudar pessoas com deficiência visual, criando um óculos com sensor para 
            nao acabar ocorrendo alguns acidentes que pode ocorrer com um deficiente visual.</h1>
            </main>
        
    </div>
    
  )
    
   
}

export default App