import React from 'react'
import img3 from '../assets/img/ojo.png'
import img4 from '../assets/img/edito.png'
import img5 from '../assets/img/admini.png'
import '../css/StylesAdmin.css'
import img1 from '../assets/img/logo.jpg'
import  { Link } from "react-router-dom"

const Admin = () => {
  return (
    <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"> <span className="logo">QualitySport</span> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Principal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Servicios">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Admin">Administación</Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
        
        <div class="lado-container">
            <div className="cajaderecha">
            <img src={img1} alt="QualitySport Logo" class="logo"/>
            </div>

        
    <div class="container2">
        
        <header class="header">
            <h2>Usuarios & Roles</h2>
            
        </header>

        
        <div class="tabs">
            <button class="tab activo">Usuarios</button>
            <button class="tab">Roles</button>
        </div>

        
            <div class="search-bar">
                <input type="text" placeholder="Buscar Usuario" />
                <button class="btn-primary">Buscar Usuario</button>
                <button class="btn-add">+add</button>
            </div>
        <section id="users" class="section">
            <table class="user-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Full Name</th>
                        <th>Status</th>
                        <th>Last Active</th>
                        <th>Profile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Juan.botero@example.com</td>
                        <td>Juan Botero</td>
                        <td>
                            <select>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </td>
                        <td>2023-10-01</td>
                        <td> <img src={img5} alt="Juan Botero" height="70" width="70" class="profile-img"/></td>
                        <td>
                            <button class="btn-primary">Edit</button>
                            <button class="btn-danger">Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
                <tbody>
                    <tr>
                        <td>Random@example.com</td>
                        <td>Random</td>
                        <td>
                            <select>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </td>
                        <td>2023-10-01</td>
                        <td> <img src={img5} alt="Juan Botero" height="70" width="70" class="profile-img"/></td>
                        <td>
                            <button class="btn-primary">Edit</button>
                            <button class="btn-danger">Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
                <tbody>
                    <tr>
                        <td>Random@example.com</td>
                        <td>Random</td>
                        <td>
                            <select>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </td>
                        <td>2023-10-01</td>
                        <td> <img src={img5} alt="Juan Botero" height="70" width="70" class="profile-img"/></td>
                        <td>
                            <button class="btn-primary">Edit</button>
                            <button class="btn-danger">Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
                <tbody>
                    <tr>
                        <td>Random@example.com</td>
                        <td>Random</td>
                        <td>
                            <select>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </td>
                        <td>2023-10-01</td>
                        <td> <img src={img5} alt="Juan Botero" height="70" width="70" class="profile-img"/></td>
                        <td>
                            <button class="btn-primary">Edit</button>
                            <button class="btn-danger">Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
                <tbody>
                    <tr>
                        <td>Random@example.com</td>
                        <td>Random</td>
                        <td>
                            <select>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </td>
                        <td>2023-10-01</td>
                        <td> <img src={img5} alt="Juan Botero" height="70" width="70" class="profile-img"/></td>
                        <td>
                            <button class="btn-primary">Edit</button>
                            <button class="btn-danger">Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </section>
        


       
        <section id="roles" class="section hidden">
            <div class="roles">
                <div class="role-card">
                    <div>
                    <h3>Admin Role</h3>
                    <p>Permisos completos para administrar usuarios, roles y contenido. Incluye acceso a análisis y herramientas comunitarias.</p>
                    <button class="btn-secondary">Manage</button></div>
                    <div> <img src={img5} height="220"  alt="Admin Role"/> </div>
                </div>
                <div class="role-card">
                    <div> 
                    <h3>Editor Role</h3>
                    <p>
                    Permisos para crear, editar y eliminar contenido. No se pueden administrar usuarios o roles.</p>
                    <button class="btn-secondary">Manage</button></div>
                    <div><img src={img4} height="200"  alt="Editor Role"/></div>
                </div>
                <div class="role-card">
                    <div>
                    <h3>Viewer Role</h3>
                    <p>Read-only access to content and analytics. No permissions to modify data.</p>
                    <button class="btn-secondary">Manage</button></div>
                    <div><img src={img3} height="190" alt="Viewer Role"/></div>
                </div>
            </div>
        </section>
    </div>
    </div>
</body>
  )
}

export default Admin
