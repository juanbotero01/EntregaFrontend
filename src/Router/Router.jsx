import { Routes, Route } from "react-router-dom"
import Principal from '../pages/Principal'
import Servicios from '../pages/Servicios'
import Admin from '../pages/Admin'
import Login from '../pages/Login'



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
  )
}

export default Router
