import React, { useState, useEffect, useContext } from "react"
import Card from "../UI/Card"
import CartContext from "../../store/cart-context"
import "./OfferCard.css"

const OfferCard = (props) => {
  const cartCtx = useContext(CartContext)
  const [amount, setAmount] = useState(1)
  const [availableAmount, setAvailableAmount] = useState(props.quantity)
  const [disableAddToCart, setDisableAddToCart] = useState(false)

  const addToCartHandler = () => {
    if (amount.length === 0) {
      return
    }
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: props.quantity,
      amount: amount,
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

  useEffect(() => {
    const item = cartCtx.items.find((item) => item.id === props.id)
    if (item) {
      if (item.amount === item.quantity) {
        //Max item quantity is in the cart
        setAvailableAmount(0)
        setAmount(0)
        setDisableAddToCart(true)
      } else {
        //Item is in the cart but not max quantity
        setAvailableAmount(item.quantity - item.amount)
        setAmount(1)
        setDisableAddToCart(false)
      }
    } else {
      //Item is not in the cart
      setAvailableAmount(props.quantity)
      setAmount(1)
      setDisableAddToCart(false)
    }
  }, [cartCtx.items, props.id, props.quantity])

  const disableDecrease = amount <= 1
  const disableIncrease = amount === props.quantity || amount >= availableAmount

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
            disabled={disableDecrease}
          >
            -
          </button>
          <p className="card-quantity">{amount}</p>
          <button
            className={"card-increase-button"}
            onClick={increaseAmountHandler}
            disabled={disableIncrease}
          >
            +
          </button>
          <div className="card-add-to-cart">
            <button
              className="card-add-to-cart-button"
              onClick={addToCartHandler}
              disabled={disableAddToCart}
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
