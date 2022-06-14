import React, { useContext } from "react"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const removeFromCartHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const incrementCartItemHandler = (id) => {
    cartCtx.incrementItem(id)
  }

  const decrementCartItemHandler = (id) => {
    cartCtx.decrementItem(id)
  }

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.title}>
        <h1 className={classes["title-text"]}>Your cart</h1>
        <button className={classes["close-button"]} onClick={props.onHideCart}>
          x
        </button>
      </div>
      <CartItem
        items={cartCtx.items}
        removeItem={removeFromCartHandler}
        incrementItem={incrementCartItemHandler}
        decrementItem={decrementCartItemHandler}
        itemsCount={numberOfCartItems}
        total={cartCtx.totalAmount}
      />
      <button className={classes["checkout-button"]} onClick={props.onCheckout}>
        Checkout
      </button>
    </Modal>
  )
}

export default Cart
