import React, { useContext } from "react"
import classes from "./CheckoutInfo.module.css"
import CartContext from "../../store/cart-context"

const CheckoutInfo = () => {
  const cartCtx = useContext(CartContext)
  // const cart = localStorage.getItem("cart")
  // const cartItems = JSON.parse(cart)
  const cartItems = cartCtx.items
  const cartItem = cartItems.map((item) => (
    <li className={classes.item} key={item.id}>
      <span>
        {item.name} x {item.amount}
      </span>
      <span>{item.price * item.amount}€ </span>
    </li>
  ))

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  )

  return (
    <div className={classes.container}>
      <h1>Order summary</h1>
      <ul className={classes.list}>{cartItem}</ul>
      <p className={classes["total-p"]}>
        <span>Total:</span>
        <span>{total}€</span>
      </p>
    </div>
  )
}
export default CheckoutInfo
