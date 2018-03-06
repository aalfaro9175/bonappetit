import React, { Component } from 'react'

import AddDishForm from './AddDish'

export default class Inventory extends Component {
  handleChange = (e, dishId) => {
    const { name, value } = e.target
    const dishes = [...this.props.dishes]
    const dishIndex = dishes.findIndex(dish => dish.id === dishId)
    dishes[dishIndex] = { ...dishes[dishIndex], [name]: value }
    this.props.updateDish(dishes)
  }

  renderInventoryItem = ({ name, price, id, status, desc, image }) => (
    <div className="dish-edit" key={id}>
      <input
        type="text"
        name="name"
        onChange={e => this.handleChange(e, id)}
        value={name}
        placeholder="Nombre del Platillo"
      />
      <input
        type="text"
        name="price"
        onChange={e => this.handleChange(e, id)}
        value={price}
        placeholder="Precio del Platillo"
      />
      <select
        type="text"
        name="status"
        onChange={e => this.handleChange(e, id)}
        value={status}
      >
        <option value="available">Disponible</option>
        <option value="unavailable">Agotado!</option>
      </select>
      <textarea
        type="text"
        name="desc"
        onChange={e => this.handleChange(e, id)}
        value={desc}
        placeholder="Descripción del Platillo"
      />
      <input
        type="text"
        name="image"
        onChange={e => this.handleChange(e, id)}
        value={image}
        placeholder="Imagen del Platillo"
      />
      <button onClick={() => this.props.deleteDish(id)}>
        Eliminar Platillo
      </button>
    </div>
  )

  render() {
    return (
      <div style={{ overflowY: 'scroll' }}>
        <h2>Inventario</h2>
        <AddDishForm addDish={this.props.addDish} />
        <button onClick={this.props.loadDishes}>Cargar Platillos</button>
        {this.props.dishes.map(this.renderInventoryItem)}
      </div>
    )
  }
}
