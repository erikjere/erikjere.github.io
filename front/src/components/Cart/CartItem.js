import React from "react"
import classes from "./CartItem.module.css"

const CartItem = (props) => {
  // const [amount, setAmount] = useState(item.amount)
  if (props.items.length > 0) {
    const cartItems = props.items
    const cartItem = cartItems.map((item) => {
      const removeItemFromCart = () => {
        props.removeItem(item.id)
      }
      const incrementItemInCart = () => {
        props.incrementItem(item.id)
      }
      const decrementItemInCart = () => {
        props.decrementItem(item.id)
      }
      return (
        <li className={classes.item} key={item.id}>
          <div className={classes["item-name"]}>
            <span>{item.name}</span>
            <span>
              {item.amount}x {item.price}€
            </span>
          </div>
          <div className={classes.buttons}>
            <button className={classes.button} onClick={decrementItemInCart}>
              -
            </button>
            <button className={classes.button} onClick={incrementItemInCart}>
              +
            </button>
            <button className={classes.button} onClick={removeItemFromCart}>
              x
            </button>
          </div>
        </li>
      )
    })
    return (
      <div>
        <ul className={classes.list}>{cartItem}</ul>
        <p className={classes["total-p"]}>
          <span>Total:</span> <span>{props.total}€</span>
        </p>
      </div>
    )
  } else {
    return <p>Your cart is empty</p>
  }
}

export default CartItem
