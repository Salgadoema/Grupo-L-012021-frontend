import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const API = 'localhost:8080'

  const [saludo, setSaludo] = useState("");

  var result = "";

  useEffect(() => {
    getHello();
  })

  const getHello = () => {
    fetch('http://localhost:8080/hola')
      .then(response => response.text())
      //.then(data => console.log(data))
      .then(data => setSaludo(data))
  }

  return (
    <div>
      <h1>{saludo}</h1>
    </div>
  )
}

export default App;
