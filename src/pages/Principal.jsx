import React from 'react'
import '../css/styles.css'
import imagen from '../assets/img/futbolplayer.png'
import imagen1 from '../assets/img/jugador-control.png'
import imagen2 from '../assets/img/Balon-melo.jpg'
import imagen3 from '../assets/img/arenasport.jpg'
import imagen4 from '../assets/img/teamgood.jpg'
import imagen5 from '../assets/img/Baseballuff.jpg'
import  { Link } from "react-router-dom"

const Principal = () => {
  return (
    <body>

      <div class="barran">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"> <span className="logo">QualitySport</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto custom-buttons"> {/* Usamos ms-auto y una clase personalizada */}
                <li className="nav-item me-2">
                <Link to="/login"><button className="btn btn-primary custom-login" type="submit">Log in</button></Link>
                </li>
                <li className="nav-item">
                   <button className="btn btn-primary custom-signup" type="submit">Sign up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <header>
          <div className="hero">
            <div className="container">
              <h1>Entra en el juego con <br /> <span className="logo">QualitySport!</span></h1>
            </div>

            <div className="img1"><img src={imagen} width="300px" height="300px" alt="" /></div>
          </div>
        </header>

        <div class="clave">
          <p>Únete a nuestra comunidad hoy</p>
          <button>Empezar</button>
        </div>
        <div class="leve">
          <p>Campo de fútbol vibrante</p>
        </div>

        <div class="ac">
          <h3>Descubre a tu mejor equipo</h3>
        </div>

        <div class="container">
          <div class="programas">
            <div className="carta">

              <img src={imagen1} width="150px" height="150px" />
              <p>Fútbol legendario</p>
            </div>
            <div className="carta">
              <img src={imagen2} width="150px" height="150px" />
              <p>Celebración de gol</p>

            </div>
            <div className="carta">
              <img src={imagen3} width="150px" height="150px" />

              <p>Comienza la diversion</p>

            </div>
            <div className="carta">
              <img src={imagen4} width="150px" height="150px" />

              <p>Empieza el juego</p>

            </div>
            <div className="carta">
              <img src={imagen5} width="150px" height="150px" />

              <p>Puntuanción grande hoy!</p>
            </div>
          </div>
        </div>


        <section className="categorias">
          <h2>Podcast de Categorias de Deporte</h2>
          <div className="container">
            <button>Noticias</button>
            <button>Analisis</button>
            <button>Noticias de transferencias</button>
            <button>Entrevistas a jugador</button>
            <button>Historial de futbol</button>
            <button>Tacticas</button>
            <button>Videos de futbol</button>
            <button>Revisiones de partido</button>
            <button>Cultura deporte</button>

          </div>
        </section>
        <div className="controlpay">
            <h2>Escoge tu plan deportivo</h2>
          <div class="container">
            <div class="pay">
              <div class="opcion1">
                <ul>
                <p>Basico</p>
                <h5>Gratis</h5>
                  <li>✅ Acceso a los últimos partidos</li>
                  <li>✅ Descargas limitadas por​</li>
                  <li>✅ Contenido exclusivo por un mes​</li>
                  <button>Iniciar Gratis</button>
                </ul>
              </div>

              <div class="opcion">
                <ul>
                <p>Pro</p>
                <h5>$80</h5>
                  <li>✅ Acceso ilimitado para todo​</li>
                  <li>✅ Descaragas ilimitadas​</li>
                  <li>✅ Contenido exclusivo por un mes​</li>
                  <button>Actualizar a Pro</button>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </body>
  )
}

export default Principal
