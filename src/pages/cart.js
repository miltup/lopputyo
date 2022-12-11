import React from 'react'
import { Link } from 'react-router-dom'

function Cart({cart}) {
  return (
    <Link to='/order'>
      <span style={{color: '#0000'}}>Ostoskori {cart.length}</span>
    </Link>
  )
}

export default Cart;