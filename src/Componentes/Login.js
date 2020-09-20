import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const Login = () => {

    //crear state de login
    const [login ,ingresarSistema] = useState({
        username:'',
        password:''
    });

    //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

    // funcion que se ejecuta cuando se escribe en un input
    const actualizarState = e =>{
        ingresarSistema({
            ...login,
            [e.target.name]: e.target.value

        })
    }

    //obtener valoresd actuales de input
    const {username,password} = login;
   
    //validar datos credenciales
    const submitLogin = e =>{

        e.preventDefault();
        if(username.trim() ==='' ){
            estadoMensaje('ingrese username');
            estadoClaseMensaje('error');
            e.target[0].focus();
            return;
        }else{
            if(password.trim()===''){
                estadoMensaje('ingrese password');
                estadoClaseMensaje('error');
                e.target[1].focus();
                return;
            }else{
                estadoMensaje('Enviando....');
                estadoClaseMensaje('enviado');
            }
        }
        
    }

    return(

    <div className='cont-form'>
            <div className='col-xl-12 col-sm-12'>
                <h2 className='titulo'>Ingreso Exconstructor</h2><br/>             
            </div>
            <div className='col-xl-12 col-sm-12'>
                <form  onSubmit={submitLogin}>
                    <div className='input-group form-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text social_icon ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                            </span>
                        </div>
                        <input
                            className='form-control'
                            type="text"
                            name="username"
                            placeholder="Ingrese Username"
                            onChange={actualizarState}
                            value={username}
                        />
                    </div>
                    <div className='input-group form-group'>
                        <div className="input-group-prepend">
                                <span className="input-group-text social_icon ">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                                    </svg>
                                </span>
                        </div>
                        <input
                            className='form-control'
                            type="password"
                            name="password"
                            placeholder="Ingrese password"
                            onChange={actualizarState}
                            value={password}
                        />
                    </div>
                    <div className='col-xl-12 col-sm-12'>
                        <div className='row'>
                            <div className='col-xl-8 col-sm-12'>
                                <div>
                                    <h5 className={claseError}>{mensajeError}</h5>
                                </div>
                            </div>
                            <div className='col-xl-4 col-sm-12'>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-block btn-outline-warning">
                                        Ingresar
                                    </button>
                                </div>                           
                            </div>
                        </div><br/>
                    </div>
                </form>
            </div>
            <div className='col-12'>
                <p className='link'>Empresa? <Link to={"/VerificarEmpresa"}>Registrate ya..!</Link></p>
                <p className='link'>Igual puedes tener <Link to={"/personaNatural"}>Cuenta Personal.!</Link></p>
            </div>
    </div>
    );
}
export default Login;

    
