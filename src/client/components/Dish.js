import React, { Component } from 'react'
import { formatPrice } from '../utils/helpers'

export default class Dish extends Component {
  render() {
    const { image, name, price, status, desc } = this.props.details
    const isAvailable = status === 'available'
    const buttonText = isAvailable ? 'Agregar a Orden' : 'Agotado!'
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="dish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}
