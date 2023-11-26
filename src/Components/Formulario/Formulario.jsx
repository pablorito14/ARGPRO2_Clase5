import React, { useState } from 'react';

const Formulario = ({}) => {
  const [nombre,setNombre] = useState('');
  const [email,setEmail] = useState('');
  const [direccion,setDireccion] = useState('');
  const [mostrarPassword,setMostrarPassword] = useState(false);

  const [mostrarValores,setMostrarValores] = useState(false);


  const [nombreValido,setNombreValido] = useState(false);
  const [direccionValida,setDireccionValida] = useState(false);
  const [emailValido,setEmailValido] = useState(false);

  const [mostrarErrores,setMostrarErrores] =useState(false);

  const actualizarNombre = (e) => {
    setNombre(e.target.value);
    setNombreValido(e.target.value.length > 3)
  }

  const actualizarEmail = (e) => {
    setEmail(e.target.value);
    setEmailValido(/^\S+@\S+\.\S+$/.test(e.target.value))
  }
  const actualizarDireccion = (e) => {
    setDireccion(e.target.value);
    setDireccionValida(e.target.value.length > 3)
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    setMostrarValores(true);
    setMostrarErrores(!nombreValido || !direccionValida || !emailValido);
  }

  const actualizarEstado = (e) => {
    e.preventDefault();
    setMostrarPassword(!mostrarPassword)
  }

  // let valor = 'paaao@gmail-asas.com.ar';
  // let patron = /^\S+@\S+\.\S+$/
  // \S => no espacios en blanco
  // console.log(patron.test(valor))

  return(
    <div>
      <div className="row my-5 justify-content-md-center">
        <div className="col-md-7">
          <h3>NO SE USA</h3>
          <form>
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input type="text" className='form-control' placeholder='Ingrese nombre' 
                      value={nombre} onChange={actualizarNombre}/>
              {(mostrarErrores && !nombreValido) && <small className='text-danger'>Nombre no valido</small>}
            </div>

            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" className='form-control' placeholder='Ingrese email' 
                      value={email} onChange={actualizarEmail}/>
              {(mostrarErrores && !emailValido) && <small className='text-danger'>Correo no valido</small>}
            </div>

            <div className="form-row d-flex">
              <div className="col-md-7">
                <input type={mostrarPassword ? 'text' : 'password'} className='form-control' />
              </div>
              <button className='btn btn-danger w-100' onClick={actualizarEstado}>{mostrarPassword ? 'Ocultar' : 'Mostrar'} password</button>
            </div>

            <div className="form-group">
              <label htmlFor="">Dirección</label>
              <input type="text" className='form-control' placeholder='Ingrese dirección' 
                      value={direccion} onChange={actualizarDireccion}/>
              {(mostrarErrores && !direccionValida) && <small className='text-danger'>Direccion no valido</small>}
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