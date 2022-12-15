import React from 'react'
import { Link } from 'react-router-dom'

function Cart({cart}) {
  return (
    <Link to='/order'>
      <span style={{color: '#0000'}}>{cart.length}</span>
      <h2>Avaa ostoskori tästä</h2>
    </Link>
  )
}

export default Cart;