import React ,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/PersonaNatural.css'
import '../Css/layout.css'

const PersonaNatural = () =>{

  return (
<>
    <div className='contaoner-fluid'>
        <div className='row'>
            <div className='col-12 '>
                <div className='row cont-form'>
                    <div className='col-12'>
                    <h3 className='titulo'>Registro Persona Natural</h3>
                    <p id="parrafo" class="text-primary">Ingresa Tus Datos para crear tu cuenta personal</p>
                    </div>
                    <div className='col-12'>
                    </div>
                    <div className='col-12'>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
);
}
export default PersonaNatural;
