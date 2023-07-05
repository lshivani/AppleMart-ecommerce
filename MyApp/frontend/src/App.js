//import React, { useEffect, useState } from 'react'
import {Component} from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'


import Login from './components/Login'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute';
import CheckOut from './components/CheckOut'
import Payment from './components/Payment'


  class App extends Component {
    
  
    render() {
      
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/home' element={<ProtectedRoute component={<Home />} />} />
          <Route path='/products' element={<ProtectedRoute component={<Products/>} />} />
          <Route path='/cart' element={<ProtectedRoute component={<Cart />} />} />
          <Route path='/checkout' element={<ProtectedRoute component={<CheckOut />} />} />
          <Route path='/payment' element={<ProtectedRoute component={<Payment />} />} />
          <Route  path = "/not-found" Component={NotFound}/>
          <Route  path='*' element={<Navigate replace to = '/not-found' />} />
          {/* <Route exact path="/home" component={Home} /> */}
          
      </Routes>
      
    
    </BrowserRouter>
  )
}
  }
export default App