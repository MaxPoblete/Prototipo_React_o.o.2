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
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
        </div>
          <div className='col-6 cont-form'>
            <Router>
                <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/VerificarEmpresa" component={Empresa}/>
                  <Route exact path="/PersonaNatural" component={PersonaNatural}/>
                  <Route exact path="/CredencialesEmpresa" component={CredencialesEmpresa}/>
                </Switch>
            </Router> 
          </div>
          <div className='col-3'>
          </div>    
        </div>
    </div>
  );
}

export default App;
