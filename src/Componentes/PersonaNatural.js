import React ,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/PersonaNatural.css';

import Titulo from './Titulo';

const PersonaNatural = () =>{

   //state de Persona Natural
   const [PersonaNatural, actualizarPersonaNatural] = useState({
      nombre:'',
      apellido:'',
      telefono:'',
      run:'',
      email:'',
      username:'',
      password:''
      
   })
  
   const obtenerValor = e =>{
      console.log(e.target.value);
      actualizarPersonaNatural({
         ...PersonaNatural,
         [e.target.name]: e.target.value 
      
      })
   }
   const {nombre,apellido,telefono,run,email,username,password} = PersonaNatural;

   // stado para mostrar ejemplo email
   const [ejemploEmail, actualizarEjemploEmail] = useState(true);

   //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

   //estado para cambiar color mensaje error
   const [claseError, estadoClaseMensaje] = useState('');

 //funcion para validar que username y password no tengan espacios vacios..
      const ContieneEspaciosVacios = (cadena) => {

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

     //validar email
     function validarEmail(email) {

      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
          return true;
      }else{
          return false;
      }
  
    }
   //validar Datos 
   const ValidarPersonaNatural = e =>{
      e.preventDefault();

      if(nombre.trim()===''){
         estadoMensaje('Ingrese Nombre..!!');
         estadoClaseMensaje('error');
         e.target[0].focus();
         return;
      }else{
         if(apellido.trim()===''){
            estadoMensaje('ingrese Apellido..!!');
            estadoClaseMensaje('error');
            e.target[3].focus();
            return;
         }else{
            if(telefono.trim()===''){
               estadoMensaje('ingrese Telefono..!!');
               estadoClaseMensaje('error');
               e.target[1].focus();
               return;
            }else{
               if(email.trim()===''){
                  estadoMensaje('ingrese Email..!!');
                  estadoClaseMensaje('error');
                  e.target[4].focus();
                  return;
               }else{
                  if(validarEmail(email)===false){
                     estadoMensaje('revise formato email sea el correcto..!!');
                     e.target[4].value='';
                     estadoClaseMensaje('error');
                     e.target[4].focus();
                     actualizarEjemploEmail(false);
                     actualizarEjemploEmail();
                     
                     return;
                  }else{
                     if(run.trim()===''){
                        estadoMensaje('ingrese Run..!!');
                        estadoClaseMensaje('error');
                        e.target[2].focus();
                        return;
                     }else{
                        if(run.length < 9){
                           estadoMensaje('run debe tener 9 caracteres..!!');
                           estadoClaseMensaje('error');
                           e.target[2].focus();
                           return;
                        }else{
                           if(isNaN(run)===true){
                              estadoMensaje('run debe ser solo valores numericos..!!');
                              estadoClaseMensaje('error');
                              e.target[2].focus();
                              return;
                           }else{
                              if(username.trim()===''){
                                 estadoMensaje('Ingrese Username..!!');
                                 estadoClaseMensaje('error');
                                 e.target[5].focus();
                                 return;
                              }else{
                                 if(ContieneEspaciosVacios(username)===true){
                                    estadoMensaje('Username No Puede Contener Espacios Vacios!!');
                                    estadoClaseMensaje('error');
                                    e.target[5].focus();
                                    return;
                                 }else{
                                    if(password.trim()===''){
                                       estadoMensaje('ingrese password');
                                       estadoClaseMensaje('error');
                                       e.target[6].focus();
                                       return;
                                    }else{
                                       if(ContieneEspaciosVacios(password)===true){
                                          estadoMensaje('Password no puede tener espacios vacios..!');
                                          estadoClaseMensaje('error');
                                          e.target[6].focus();
                                          return;
                                       }else{
                                          estadoMensaje('paso..!');
                                          estadoClaseMensaje('enviado');
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }

  return (
<>
<form 
      onSubmit={ValidarPersonaNatural}
>
  <div className='row  form-persona-Natural col-sm-12 col-xl-6'>
      <div className='col-sm-12 col-xl-12'>
        <Titulo 
          titulo='Registro Persona Natural'
        />
        <p id="parrafo" class="text-primary">Ingresa Tus Datos para crear tu cuenta personal</p>
      <br/>
      </div>
      <div className = 'col-sm-12 col-xl-6'>
         <div className='input-group form-group'>
            <div className="input-group-prepend">
            <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg></span>
            </div>
            <input
               className='form-control'
               type="text"
               name="nombre"
               placeholder="Ingrese Nombre"
               onChange={obtenerValor}
               value={nombre}
               maxLength={30}
               />
            </div>
            <div className='input-group form-group'>
               <div className="input-group-prepend">
               <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>
               </div>
               <input
                  className='form-control'
                  type="text"
                  name="telefono"
                  placeholder="Ingrese Telefono"
                  onChange={obtenerValor}
                  value={telefono}
                  maxLength={12}
               />
            </div>
            <div className='input-group form-group'>
                  <div className="input-group-prepend">
                  <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></span>
                  </div>
                  <input
                     className='form-control'
                     type="text"
                     name="run"
                     placeholder="Ingrese Run"
                     onChange={obtenerValor}
                     value={run}
                     maxLength={9}
                     />
            </div>
      </div>
      <div className = 'col-sm-12 col-xl-6'>
         <div className='input-group form-group'>
            <div className="input-group-prepend">
            <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"/></svg></span>
            </div>
            <input
               className='form-control'
               type="text"
               name="apellido"
               placeholder="Ingrese Apellido"
               onChange={obtenerValor}
               value={apellido}
               maxLength={30}
            />
         </div>
         <div className='input-group form-group'>
            <div className="input-group-prepend">
            <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>
            </div>
            <input
               className='form-control'
               type="text"
               name="email"
               placeholder={ejemploEmail? "Ingrese Email" : "Ej: juanPerez@gmail.com"}
               onChange={obtenerValor}
               value={email}
               maxLength={60}
            />
         </div>
                    
      </div>
      <div className='col-sm-12 col-xl-62'>
         <p class="text-primary" >Ingrese Credenciales</p>
         <div className='row'>
            <div className='col-sm-12 col-xl-6'>
               <div className='input-group form-group'>
                  <div className="input-group-prepend">
                  <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></span>

                  </div>
                  <input
                  className='form-control'
                  type="text"
                  name="username"
                  placeholder="Ingrese Username"
                  onChange={obtenerValor}
                  value={username}
                  maxLength={20}
                  />
               </div>
            </div>
            <div className='col-sm-12 col-xl-6'>
               <div className='input-group form-group'>
                  <div className="input-group-prepend">
                  <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg></span>
                  </div>
               <input
                  className='form-control'
                  type="text"
                  name="password"
                  placeholder="Ingrese Password"
                  onChange={obtenerValor}
                  value={password}
                  maxLength={20}
               />
            </div><br/>
            </div>
         </div>
         <div className='row'>
               <div className='col-sm-12 col-xl-6'>
               <h5 className={claseError}>{mensajeError}</h5>
               </div>
               <div className='col-sm-12 col-xl-6'>
                  <button
                     type="submit"
                     className="btn btn-block btn-outline-warning">
                     Ingresar
                  </button>
               </div>
         </div>
      </div>
   </div>
   </form>
</>
);
}
export default PersonaNatural;