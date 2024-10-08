import React from 'react'
import '../css/Styleservi.css'
import img1 from '../assets/img/logo.jpg'
import imgilu from '../assets/img/ilustracion.png'

const Login = () => {
  return (
    <body>
    <div class="login-container">
        <div class="login-izquierda">
            
            <div class="logo-container">
                <img src={img1} alt="QualitySport Logo" class="logo"/>
                <h1>QualitySport</h1>
            </div>
            <img src={imgilu}  class="illustracion"/>
        </div>
        <div class="login-right">
            <h2>¡Bienvenido Regístrate!</h2>
            <form action="/login" method="POST">
                <div class="input-container">
                    <input type="email" placeholder="Correo electrónico" required />
                </div>
                <div class="input-container">
                    <input type="password" placeholder="Contraseña" required />
                    <span class="posi-password">👁</span>
                </div>
                <button type="submit" class="login-button">Iniciar sesión</button>
            </form>
            <div class="links">
                <a href="#">Recordar contraseña</a>
                <p>¿Todavía no tienes una cuenta? <a href="#">Regístrate</a></p>
            </div>
        </div>
    </div>
</body>
  )
}

export default Login
