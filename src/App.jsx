import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [isLogged, setIsLogged] = useState(NaN);


  return (
    <div style={{padding: "2rem"}}>
      <h1>Welcome to the Codebase</h1>
      <button
      onClick={() => setIsLogged(!isLogged)}
      >Toggle Login
      </button>

      <div>
        <h3>&& operator</h3>
        {!!isLogged && <p>You are Welcome!</p>}
      </div>
      <div>
        <h3>Ternary operator</h3>
        {isLogged ? <p>You are Welcome!</p> : <p>Please log in.</p>}
      </div>

    </div>
  )
}

export default App
