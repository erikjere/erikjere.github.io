import React, { useState, useContext } from "react"
import Card from "../UI/Card"
import CartContext from "../../store/cart-context"
import "./OfferCard.css"

const OfferCard = (props) => {
  const cartCtx = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  const addToCartHandler = () => {
    const enteredAmount = parseInt(amount)
    if (enteredAmount.length === 0) {
      return
    }
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: props.quantity,
      amount: enteredAmount,
    })
  }

  const increaseAmountHandler = () => {
    if (amount < props.quantity) {
      setAmount(amount + 1)
    }
  }

  const decreaseAmountHandler = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <Card>
      <div className="sub-card">
        <div className="card-inner">
          <img
            className="card-image"
            src={require("../" + props.image)}
            alt={props.name}
          />
          <div className="card-description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div className="card-content">
        <p className="card-food-name">
          {props.name} <span className="card-price">{props.price}€</span>
        </p>
        <p className="card-address">{props.address}</p>
        <div className="quantity">
          <button
            className="card-decrease-button"
            onClick={decreaseAmountHandler}
          >
            -
          </button>
          <p className="card-quantity">{amount}</p>
          <button
            className="card-increase-button"
            onClick={increaseAmountHandler}
          >
            +
          </button>
          <div className="card-add-to-cart">
            <button
              className="card-add-to-cart-button"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default OfferCard
