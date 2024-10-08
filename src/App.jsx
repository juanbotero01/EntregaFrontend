import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../src/Layouts/Layout'
import Principal from '../src/pages/Principal'
import Admin from '../src/pages/Admin'
import Servicios from '../src/pages/Servicios'
import Login from '../src/pages/Login'

function App() {
  return (
    <Layout>
        <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
      </Layout>
  )
}

export default App

