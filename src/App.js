import './App.css';
import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Você clicou {count} vezes</p>

      <button onClick={ () => {setCount (count + 1)}}>Incremento</button>
      <button onClick={ () => {setCount (count - 1)}}>Decremento</button>
    </div>
  );
}

export default App;
