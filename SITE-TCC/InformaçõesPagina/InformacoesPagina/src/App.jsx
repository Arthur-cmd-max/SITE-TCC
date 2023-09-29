import React from 'react'
import "./App.css"

function App() {

  return (
    <>
      <div>
      <main>

        <button className='Home'>Home</button>
        <button className='Informacoes'>Informações</button>
        <button className='Sobre'>Sobre</button>
        <button className='Bibliografia'>Bibliografia</button>

 </main>
 <br />
      <h1>informações:</h1>
      <br />

        <h2>
        
Sensores de proximidade, como ultrassom, infravermelho ou laser, detectam objetos próximos ao usuário.
<br />
        
Esses sensores enviam informações de distância dos objetos para um microcontrolador.
<br />
        
O microcontrolador processa essas informações e emite alertas sonoros para o usuário por meio de um alto-falante ou fones de ouvido.
<br />
        
O usuário recebe os alertas sonoros e pode evitar colisões ou obstáculos com base nessas informações.
</h2>

<br />

<h1>Objetivo do trabalho:</h1>

<br />

<h2>
Ajudar pessoas com deficiência visual, criando um óculos com sensor.para nao acabar ocorrendo alguns acidentes que pode ocorrer com um deficiente visual.</h2>

</div>
    </>
  )
}

export default App