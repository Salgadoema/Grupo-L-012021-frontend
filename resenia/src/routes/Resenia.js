
import { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import login from '../pages/login';
import register from '../pages/Register';

function Resenia() {

  const API = 'http://localhost:8080'

  const [saludo, setSaludo] = useState("");

  useEffect(() => {
    getHello();
  })

  const getHello = () => {
    fetch(API + "/hola")
      .then(response => response.text())
      .then(data => setSaludo(data))
  }

  return (
    <BrowserRouter>
      <Switch>
         <Route exact path="/" component={register}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Resenia;
