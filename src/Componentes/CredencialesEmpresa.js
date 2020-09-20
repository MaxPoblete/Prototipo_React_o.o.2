import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const CredencialesEmpresa = () => {
    
    //state de Credenciales Empresa
    const [Credenciales , actualizarCredenciales] = useState({
        username:'',
        password:'',
        comprovarPassword:''

    });



    //funcion que captura el state de los campos..
    const estadoCredenciales = e =>{
        actualizarCredenciales({
            ...Credenciales,
            [e.target.name]: e.target.value
        })
    }

    //funcion generar Password
        function generarPassword() {

            var resultado = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            
            for ( var i = 0; i < 20; i++ ) {
                resultado += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        
            return resultado          
    }

    //funcion restablecer formulario...
    const Restablecer = () =>{
        actualizarCredenciales({
            ...Credenciales,
            username:'',
            password:'',
            comprovarPassword:''
            
        })
    }

    const GenerarCredenciales = () =>{

         let llave = generarPassword();
        actualizarCredenciales({
            ...Credenciales,
            password:llave,
            comprovarPassword:llave
        })

    }


    //funcion para validar que username y password no tengan espacios vacios..
    function ContieneEspaciosVacios(cadena) {

        let  contiene;
        const listaFinal = [];
        const listaCaracteresCadena = cadena.split('');
    
        listaCaracteresCadena.forEach(element => {
            if(element !== ' '){
                listaFinal.push(element);
            }
    
        });
    
            if(listaFinal.length !== listaCaracteresCadena.length ){
                contiene = true;
            }else{
                contiene = false;
            }
    
        return contiene;
    }

    //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje error
    const [claseError, estadoClaseMensaje] = useState('');

    //distroxtion de valores de state
    const{username,password,comprovarPassword} = Credenciales;


    //validar credenciales ingresadas
     const ValidarCredenciales = e =>{

         console.log(e.target[0]);
         e.preventDefault();

        if(username.trim()===''){

            estadoMensaje('ingrese username');
            estadoClaseMensaje('error');
            e.target[0].focus();
            return;

        }else{
            if(ContieneEspaciosVacios(username)===true){

                    estadoMensaje('Username no puede contener Estacios Vacios..!!');
                    estadoClaseMensaje('error');
                    e.target[0].focus();
                    return;
                }else{
                    if(username.length < 8){

                        estadoMensaje('Username debe Tener Minimo 8 caracteres..!!');
                        estadoClaseMensaje('error');
                        e.target[0].focus();
                        return;

                    }else{
                        if(password.trim()===''){

                            estadoMensaje('Ingrese Password..!!');
                            estadoClaseMensaje('error');
                            e.target[1].focus();
                            return;

                        }else{
                            if(ContieneEspaciosVacios(password)===true){

                                estadoMensaje('Password no Puede Contener Espacios Vacios..!!');
                                estadoClaseMensaje('error');
                                e.target[1].focus();
                                return;

                            }else{
                                if(password.length < 8){

                                    estadoMensaje('Password Debe Tener Minimo 8 caracteres');
                                    estadoClaseMensaje('error');
                                    e.target[1].focus();
                                    return;
                                }
                                estadoMensaje('esta correcto');
                                estadoClaseMensaje('error');
                                return;
                            }
                        }
                    }
                    
                }
        }
}
   


  return (
    <>
    <div className='col-xl-12 col-sm-12'>
        <h2 className='titulo'>Ingrese Credenciales Empresa</h2>
        <p className='titulo'>Ingrese Credenciales Para Iniciar Session como Empresa</p>   <br/>        
    </div>
    <div className='col-xl-12 col-sm-12'>
        <form  onSubmit={ValidarCredenciales}>
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
                    placeholder="Ingrese Run Empresa"
                    onChange={estadoCredenciales}
                    value={username}
                    maxLength={'30'}
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
                    type="text"
                    name="password"
                    placeholder="Ingrese password"
                    onChange={estadoCredenciales}
                    value={password}
                    maxLength={'20'}
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
                    type="text"
                    name="comprovarPassword"
                    placeholder="repita password"
                    onChange={estadoCredenciales}
                    value={comprovarPassword}
                    maxLength={20}
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
                                Crear Cuenta 
                            </button>
                        </div>  
                        <div>
                            <button
                                type="button"
                                onClick={Restablecer}
                                className="btn btn-block btn-outline-warning">
                                Restablecer 
                            </button>
                        </div>  
                        <div>
                            <button
                                type="button"
                                onClick={GenerarCredenciales}
                                className="btn btn-block btn-outline-warning">
                                Generar password 
                            </button>
                        </div>                           
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div className='col-12'>

    </div>
</>
);
}
export default CredencialesEmpresa;