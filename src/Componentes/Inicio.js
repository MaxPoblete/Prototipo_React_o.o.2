import React ,{useState} from 'react';
import {Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


    const Inicio = () => {

        const [estadoInput, actualizarEstadoInput] = useState(false);

         const [Inicio, actualizarIcinio] = useState({
            nombre: ''
         })

         const obtenerEstado = e =>{
            actualizarIcinio({
                ...Inicio,
                [e.target.name]: e.target.value
            })
         }

        const {nombre} = Inicio;

        //stados de mensaje error 
            //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

        //validar Dato

const enviar = e =>{
     e.preventDefault();

     if(nombre.trim()===''){
        estadoMensaje('ingrese Nombre...!');
        estadoClaseMensaje('error');
        e.target[0].focus();
        return;
            }else{
                estadoMensaje('Enviando...');
                estadoClaseMensaje('enviado');
                actualizarEstadoInput(true)
                return;
            }

}
         
    return(
    <>
     {estadoInput? <Redirect to={"/"} /> : <div>
             
             <form
                  onSubmit = {enviar}
                 >
                 <input 
                     className='form-control'
                     type="text"
                     name="nombre"
                     placeholder="Ingrese Nombre"
                     onChange={obtenerEstado}
                     value={nombre}
                 />
                 <button
                 type ='submit'
                 >Enviar</button>
             </form>
             <h5 className={claseError}>{mensajeError}</h5>
     
     </div>}
          
</> 

) 

}

export default Inicio;

