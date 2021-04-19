import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const API = 'http://localhost:8080'

  const [saludo, setSaludo] = useState("");

  useEffect(() => {
    getHello();
  })

  const getHello = () => {
    fetch(API + '/hola')
      .then(response => response.text())
      .then(data => setSaludo(data))
  }

  return (
    <div>
      <h1>{saludo}</h1>
    </div>
  )
}

export default App;
