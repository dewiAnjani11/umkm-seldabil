import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Details from './Page/Details'
import Categories from './Page/Categories'
import Login from './Page/Login'
import Dashboard from './Page/Dashboard'
import CreateProductPage from './Page/CreateProduct'
import UpdateProductPage from './Page/UpdateProductPage'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/category/:nameCategory/detail/:id' element={<Details />} />
      <Route path='/category/:nameCategory' element={<Categories />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/produk/create' element={<CreateProductPage />} />
      <Route path='/produk/:produkId/update' element={<UpdateProductPage />} />
    </Routes>
  )
}
