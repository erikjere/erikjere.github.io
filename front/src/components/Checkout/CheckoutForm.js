import React from "react"
import classes from "./CheckoutForm.module.css"

const CheckoutForm = () => {
  return (
    <div className={classes.container}>
      <h1>Credit card info</h1>
      <form className={classes.form}>
        <label className={classes.label}>Name on Card:</label>
        <input className={classes.input} type="text" name="nameOnCard" />

        <label className={classes.label}>Credit card number:</label>
        <input className={classes.input} type="text" name="creditCard" />

        <div className={classes["small-container"]}>
          <div
            className={classes["sub-small-container"]}
            style={{ marginRight: "6%" }}
          >
            <label className={classes.label}>Expiration date:</label>
            <input
              className={classes.expiration}
              type="text"
              name="expirationDate"
            />
          </div>
          <div
            className={classes["sub-small-container"]}
            style={{ marginLeft: "6%" }}
          >
            <label className={classes.label}>CVV:</label>
            <input className={classes.cvv} type="text" name="cvv" />
          </div>
        </div>
        <input className={classes.submit} type="submit" value="Checkout" />
      </form>
    </div>
  )
}
export default CheckoutForm
