import React from 'react'
import OrderItem from '@components/OrderItem'
import Menu from '@components/Menu'
import '@styles/Checkout.scss'

const Checkout = () => {
  return (
    <div className='Checkout'>
        <div className="Checkout-container">
            <h1 className="title">My order</h1>
            <div className="Checkout-content">
                <div className="order">
                    <p>
                        <span>0.3.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.0</p>
                </div>
            </div>
            <OrderItem />
        </div>
    </div>
  )
}

export default Checkout