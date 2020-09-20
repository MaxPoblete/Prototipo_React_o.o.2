import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';




import 'bootstrap/dist/css/bootstrap.min.css';
//lista para simular ws de iss para validar empresa y obtener sus datos :)
const listaEmpresasIss = [
    {nombre : "Empresa Uno ",run : "111111111", razonSocial : "construccion",telefono :"911111", correo : "EmpresaUno@gmail.com", username :'',password:''},
    {nombre : "Empresa dos ",run : "222222222", razonSocial : "construccion",telefono :"911111", correo : "EmpresaDos@gmail.com", username :'',password:''},
    {nombre : "Empresa tres ",run : "333333333", razonSocial : "construccion",telefono :"911111", correo : "EmpresaTres@gmail.com", username :'',password:''},
    {nombre : "Empresa cuatro ",run : "444444444", razonSocial : "construccion",telefono :"911111", correo : "EmpresaCuadro@gmail.com", username :'',password:''},
    {nombre : "Empresa cinco ",run :  "555555555", razonSocial : "construccion",telefono :"955555", correo : "Empresacinco@gmail.com", username :'',password:''}
]

const VerificarEmpresa = () => {


    //estado rut 
    const [existeRun ,editarestadoRun] = useState(false);

    //create estate 
    const [Run, actualizarRun] = useState({
        run:''
    });

     //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

     //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

    const estadoRun = e =>{
        actualizarRun({
            ...Run,
            [e.target.name]: e.target.value
        })
    }

    const {run} = Run;

    const validarRun = e =>{
        e.preventDefault();

        if(run.trim()===''){

            estadoMensaje('ingrese run valido...!');
            estadoClaseMensaje('error');
            e.target[0].focus();
            return;

        }else{
            if(run.length < 9 || run.length > 9){

                estadoMensaje('Run Debe Contener 9 Carracteres...!');
                estadoClaseMensaje('error');
                e.target[0].focus();
                return;

            }else{
                if(isNaN(run)===true){

                    estadoMensaje('ingrese Valores numericos...!');
                    estadoClaseMensaje('error');
                    e.target[0].focus();
                    return;

                }else{
                    
                    const listaRunIss = [];

                    listaEmpresasIss.forEach(empresa => {
                         listaRunIss.push(empresa.run);
                    });

                    if(listaRunIss.includes(run)===true){

                        editarestadoRun(true);

                    }else{
                        estadoMensaje('run no encontrado..!!');
                        estadoClaseMensaje('error');
                        e.target[0].focus();
                        return;
                    }
                }
            }
        }
    }

  return (
    <>
    {existeRun ? <Redirect to={"CredencialesEmpresa"} /> : 
    
    <div>

    <div className='col-xl-12 col-sm-12'>
        <h2 className='titulo'> Registro Empresa</h2>
        <p className='titulo'>Ingrese Run Para Verificar Datos Tributarios</p>   <br/>        
    </div>
    <div className='col-xl-12 col-sm-12'>
        <form  onSubmit={validarRun}>
            <div className='input-group form-group'>
                <div className="input-group-prepend">
                    <span className="input-group-text social_icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                    </svg>
                    </span>
                </div>
                <input
                    className='form-control'
                    type="text"
                    name="run"
                    placeholder="Ingrese Run Empresa"
                    onChange={estadoRun}
                    value={run}
                    maxLength={9}
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
                                Verificar Run
                            </button>
                        </div>                           
                    </div>
                </div><br/>
            </div>
        </form>
    </div>
    <div className='col-12'>
    <p className='link'>Ingrese<Link to={"/CredencialesEmpresa"}>Credenciales Empresa</Link></p>

    </div>
    </div> }

    
</>
  );
}
export default VerificarEmpresa;