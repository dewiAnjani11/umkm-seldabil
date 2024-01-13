import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Details from './Page/Details'
import Categories from './Page/Categories'
import Login from './Page/Login'
import Dashboard from './Page/Dashboard'
import CreateProdukPage from './Page/CreateProduk'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/details/data/:category/:id' element={<Details />}></Route>
      <Route path='/category/:name' element={<Categories />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/produk/create' element={<CreateProdukPage />} />
    </Routes>
  )
}
