import React from 'react'
import Header from '../components/common/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Footer from '../components/common/footer/Footer'
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';

const AppRouter = () => {
  return (
    <Router>
    <Header/>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
  </Routes>
  <Footer />
</Router>
  )
}

export default AppRouter