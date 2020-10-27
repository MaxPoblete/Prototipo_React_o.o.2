import React from 'react';
import Login from './Componentes/Login'
import Empresa from './Componentes/VerificarEmpresa'
import PersonaNatural from './Componentes/PersonaNatural'
import CredencialesEmpresa from './Componentes/CredencialesEmpresa'
import layout from './Componentes/layout'
import  './Css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/VerificarEmpresa" component={Empresa}/>
          <Route exact path="/PersonaNatural" component={PersonaNatural}/>
          <Route exact path="/CredencialesEmpresa" component={CredencialesEmpresa}/>
          <Route exact path="/layout" component={layout}/>
        </Switch>
      </Router> 
    </>
  );
}
export default App;

