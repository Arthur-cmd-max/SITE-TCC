import React from 'react'
import './App.css'

import armacao from "./images/armacao.png"
import buzzer from "./images/buzzer.png"
import distancia from "./images/distancia.png"
import nano from "./images/nano.png"
import vibracall from "./images/vibracall.png"

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

      <p>Itens Utilizados:</p>
        <br/>

        <div>

        <h1>Armação do óculos:</h1>
        <img src={armacao} alt="Armação do óculos" />
        <h2>Cerca de: R$65,00</h2>

        <br/>

        <h1>Sensor de distância:</h1>
        <img src={distancia} alt="Sensor de distância" />
        <h2>Cerca de: R$12,99</h2>

        <br/>

        <h1>Placa Arduino Nano:</h1>
        <img src={nano} alt="Placa Nano" />
        <h2>Cerca de: R$30,00</h2>

        <br/>

        <h1>Buzzer:</h1>
        <img src={buzzer} alt="Buzzer" />
        <h2>Cerca de: R$2,38</h2>

        <br/>

        <h1>Motor VibraCall:</h1>
        <img src={vibracall} alt="Motor VibraCall" />
        <h2>Cerca de: R$7,00</h2>

        <br/>

      <button className='Voltar'>Voltar</button>

        </div>
        

      </div>

    </div>

    
  
  )
    
   
}

export default App
