import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonaNatural = () =>{
  return (
    <div className='row'>
        <h2 className='titulo'>Registro Persona Natural</h2>
        <form>
            <div className='col-xl-12 col-sm-12'>
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
                        placeholder="Ingrese Nombre"
                        onChange={'estadoRun'}
                        value={'run'}
                        maxLength={9}
                    />
                </div>
            </div>
            <div className='col-xl-12 col-sm-12'>
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
                        placeholder="Ingrese Nombre"
                        onChange={'estadoRun'}
                        value={'run'}
                        maxLength={9}
                    />
                </div>
            </div>
        </form>
    </div>
  );
}
export default PersonaNatural;