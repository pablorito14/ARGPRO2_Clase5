import React, { useState } from 'react';

const Formulario = ({}) => {
  const [nombre,setNombre] = useState('');
  const [email,setEmail] = useState('');
  const [direccion,setDireccion] = useState('');

  const [mostrarValores,setMostrarValores] = useState(false);

  const actualizarNombre = (e) => {
    console.log(e.target.value)
    setNombre(e.target.value);
  }

  const actualizarEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value);
  }
  const actualizarDireccion = (e) => {
    console.log(e.target.value)
    setDireccion(e.target.value);
  }

  const enviarDatos = (event) => {
    event.preventDefault();

    setMostrarValores(true);
  }

  return(
    <div>
      <div className="row my-5 justify-content-md-center">
        <div className="col-md-5">
          <h3>NO SE USA</h3>
          <form novalidate>
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input type="text" className='form-control' placeholder='Ingrese nombre' 
                      value={nombre} onChange={actualizarNombre}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" className='form-control' placeholder='Ingrese email' 
                      value={email} onChange={actualizarEmail}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Dirección</label>
              <input type="text" className='form-control' placeholder='Ingrese dirección' 
                      value={direccion} onChange={actualizarDireccion}/>
            </div>
            <button className='btn btn-success'
                    type='submit' onClick={enviarDatos}>Enviar</button>
          </form>
        </div>
      </div>

      <div className="row my-5 justify-content-md-center">
      {mostrarValores && <div className="col-md-5">
          <h3>Tus datos son: </h3>
          <p><strong>Nombre: </strong>{nombre}</p>
          <p><strong>Correo: </strong>{email}</p>
          <p><strong>Direccion: </strong>{direccion}</p>
        </div>}
      </div>
    </div>
  )
}

export { Formulario }