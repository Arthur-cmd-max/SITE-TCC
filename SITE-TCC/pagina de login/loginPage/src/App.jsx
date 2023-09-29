import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
     <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <input type="text" id='usuario' placeholder=' Usuário:' className="campo1"/>
          </div>

          <div>
            <input type="password" id='senha' placeholder=' Senha:' className="campo1"/>
          </div>

          <div>
            <input type="Gmail" id='email' placeholder=' Email:' className="campo1"/>
          </div>

          <button>Cadastrar</button>
          
        </form>
      </main>
    </>
  )
}

export default App