

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import register from '../pages/Register';
import history from '../pages/history';
import home from '../pages/Home';
import apiKey from '../pages/apiKey';

function Resenia() {

  return (
    <BrowserRouter history={history}>
      <Switch>
         <Route exact path="/" component={home}/>
         <Route path ="/home" component = {home}/>
         <Route path="/Register" component={register} />
         <Route path ="/apiKey" component = {apiKey}/>
         
      </Switch>
    </BrowserRouter>
  )
}

export default Resenia;
