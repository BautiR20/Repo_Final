import React, { useState } from 'react'
import "../../styles/crearCuenta.css"
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useRegister';

function CrearCuenta() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  })

  const [success, setSuccess] = useState(false)

  // TODO: 2. Importar variables de estado desde useRegister (loading, error)
  const { registerUser, loading, error } = useRegister()
  const navigate = useNavigate();

  // Función manejadora para los cambios en los inputs múltiples
  const handleChange = (e) => {
    // TODO: 3. Programar el desestructurado y actualización de formData aquí
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: 4. Lanzar petición de uso. Si ocurre exitosamente, mostrar mensaje 
    // y navegar al /login
    const result = await registerUser(formData)
    if(result.success){
      setSuccess(true)
      setTimeout(() => {
        navigate("/logueo")
      }, 3000)
    }
  };
  return (
    <>
    <div class="crearCuenta">
      <h2>Log In</h2>
      {error && <div className='error-banner'>{error}</div> }
    { success && (
      <div className='success-banner'>¡Registro exitoso! Redirigiendo a iniciar sesion</div>
    ) }
      <form onSubmit={handleSubmit}>
        <div class="grid-container">
          
            <div class="grid-item datos">
              <label>Nombre:</label>
              <input 
                  type="text" 
                  name="name"
                  placeholder="Tu nombre" 
                  required 
                  onChange={handleChange}
                  value={formData.name}
                />
              <label>Apellido:</label>
              <input 
                  type="text" 
                  name="lastName"
                  placeholder="Tu apellido" 
                  required 
                  onChange={handleChange}
                  value={formData.lastName}
                />
              <label>Email:</label>
              <input 
                  type="email" 
                  name="email"
                  placeholder="correo@ejemplo.com" 
                  required 
                  onChange={handleChange}
                  value={formData.email}
                />
              <label>Contraseña:</label>
              <input 
                  type="password" 
                  name="password"
                  placeholder="Mínimo 6 chars, 1 Mayuscula, 1 Numero" 
                  required 
                  onChange={handleChange}
                  value={formData.password}
                />
            </div>
            <div class="grid-item buttons"><button type="submit" disabled={loading || success}>
                {loading ? 'Registrando...' : 'Registrarme'}
              </button>
            </div>
          
        </div>
      </form>
      </div>

    </>
  )
}

export default CrearCuenta
