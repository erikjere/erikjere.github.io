import React from "react"
import Offers from "../Offer/Offers"
import Cart from "../Cart/Cart"
import classes from "./Home.module.css"

const Home = (props) => {
  const openCheckout = () => {
    props.onHideCart()
    props.setPage("Checkout")
  }

  return (
    <div className={classes.container}>
      {props.showCart && (
        <Cart onCheckout={openCheckout} onHideCart={props.onHideCart} />
      )}
      <Offers />
    </div>
  )
}

export default Home
