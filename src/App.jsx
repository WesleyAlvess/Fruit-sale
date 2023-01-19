import React from 'react'
import { CartProvider } from "react-use-cart"
import './App.css'


import Cart from './components/Cart'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  )
}

export default App
