

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import register from '../pages/Register';
import history from '../pages/history';
import home from '../pages/Home';

function Resenia() {

  return (
    <BrowserRouter history={history}>
      <Switch>
         <Route exact path="/" component={home}/>
         <Route path ="/home" component = {home}/>
         <Route path="/Register" component={register} />
         
      </Switch>
    </BrowserRouter>
  )
}

export default Resenia;
