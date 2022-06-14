import React from "react"
import CheckoutForm from "../Checkout/CheckoutForm"
import CheckoutInfo from "../Checkout/CheckoutInfo"
import classes from "./Checkout.module.css"

const Checkout = () => {
  return (
    <div className={classes.container}>
      <CheckoutForm />
      <CheckoutInfo />
    </div>
  )
}

export default Checkout
