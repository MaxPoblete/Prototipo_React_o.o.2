import React from 'react';
import Login from './Componentes/Login'
import Empresa from './Componentes/VerificarEmpresa'
import PersonaNatural from './Componentes/PersonaNatural'
import CredencialesEmpresa from './Componentes/CredencialesEmpresa'
import  './App.css'
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
                </Switch>
            </Router> 
    </>
  );
}

export default App;
