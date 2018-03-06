import React, { Component } from 'react'

import { formatPrice } from '../utils/helpers'

const OrderItem = (props, dishId) => {
  const dish = props.dishes.find(dishItem => dishItem.id === dishId)
  const count = props.order[dishId]

  if (!dish || dish.status === 'unavailable') {
    return (
      <li key={dishId}>
        Perdón, {dish ? dish.name : 'platillo'} ya no está disponible!
      </li>
    )
  }

  return (
    <li key={dishId}>
      <span>
        {count} {dish.name}
      </span>
      <span className="price">{formatPrice(count * dish.price)}</span>
      <button onClick={() => props.removeFromOrder(dishId)}>&times;</button>
    </li>
  )
}

const Order = props => {
  const orderIds = Object.keys(props.order)
  const total = orderIds.reduce((prevTotal, dishId) => {
    const dish = props.dishes.find(dishItem => dishItem.id === dishId)
    const count = props.order[dishId]
    const isAvailable = dish && dish.status === 'available'

    return isAvailable ? prevTotal + (count * dish.price || 0) : prevTotal
  }, 0)

  return (
    <div className="order-wrap">
      <h2>Orden Cliente</h2>
      <ul className="order">
        {orderIds.map(orderItem => OrderItem(props, orderItem))}
        <li className="total">
          <strong>Total:</strong>
          {formatPrice(total)}
        </li>
      </ul>
    </div>
  )
}

export default Order
