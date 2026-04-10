import React, { useState } from 'react'
import "../../styles/logueo.css"
import { useLogin } from '../../hooks/useLogin'
import { Link, useNavigate } from 'react-router-dom';

function Logueo() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  // TODO: 2. Importar hook useLogin y destructurar sus valores
  const {loginUser, loading, error} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser({email, password})

    // TODO: 4. Prevenir recarga y ejecutar loginUser. 
    // Si sale bien, redirigir usando navigate()
    if(result.success){
      navigate("/product")
    }
  };
  return (
    <>
    <div class="logueo">
      <h2>Log In</h2>
      { error && <div className='error-banner'> {error} </div> }
      <form onSubmit={handleSubmit}>
      <div class="grid-container">
        <div class="grid-item datos">
          <label for="Nombre">Email: </label><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="correo@ejemplo.com" required />
          <label for="Nombre">Contraseña: </label><input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="********" required />
        </div>
        <div class="grid-item buttons">
          <button type="submit" disabled={loading}>
            { loading ? "Entrando..." : "Ingresar"}
          </button>
        </div>
        <div class="grid-item buttons"> <Link to="/crearCuenta">Regístrate aquí</Link></div>
      </div>
      </form>
      </div>

    </>
  )
}

export default Logueo
