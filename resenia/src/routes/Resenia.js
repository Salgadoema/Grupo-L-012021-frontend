

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import login from '../pages/login';
import register from '../pages/Register';
import history from '../pages/history';

function Resenia() {
/*
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
*/
  return (
    <BrowserRouter history={history}>
      <Switch>
         <Route exact path="/" component={register}/>
         <Route path="/Register" component={register} />
         <Route path="/login" component={login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Resenia;
