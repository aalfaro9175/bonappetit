import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { formatPrice } from '../utils/helpers'

const OrderItem = (props, dishId) => {
  const dish = props.dishes.find(dishItem => dishItem.id === dishId)
  const count = props.order[dishId]
  const transitionOptions = {
    classNames: 'order',
    key: dishId,
    timeout: { enter: 500, exit: 500 },
  }

  if (!dish || dish.status === 'unavailable') {
    return (
      <CSSTransition {...transitionOptions}>
        <li key={dishId}>
          Perdón, {dish ? dish.name : 'platillo'} ya no está disponible!
        </li>
      </CSSTransition>
    )
  }

  return (
    <CSSTransition {...transitionOptions}>
      <li key={dishId}>
        <span>
          <TransitionGroup component="span" className="count">
            <CSSTransition
              classNames="count"
              key={count}
              timeout={{ enter: 500, exit: 500 }}
            >
              <span>{count}</span>
            </CSSTransition>
          </TransitionGroup>
          {dish.name}
          <span className="price">{formatPrice(count * dish.price)}</span>
          <button onClick={() => props.removeFromOrder(dishId)}>&times;</button>
        </span>
      </li>
    </CSSTransition>
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
      <TransitionGroup component="ul" className="order">
        {orderIds.map(orderItem => OrderItem(props, orderItem))}
      </TransitionGroup>
      <div className="total">
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  )
}

export default Order
