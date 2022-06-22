import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import { FiShoppingCart } from "react-icons/fi"
import classes from "./CartButton.module.css"

const CartButton = (props) => {
  const [buttonActive, setButtonActive] = useState(false)
  const cartCtx = useContext(CartContext)

  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setButtonActive(true)
      setTimeout(setButtonActive.bind(false), 600)
    }
  }, [cartCtx.items])

  const iconClasses = buttonActive
    ? `${classes.icon} ${classes.bouncing}`
    : `${classes.icon}`
  return (
    <button className={classes.button} onClick={props.onClick}>
      Cart <FiShoppingCart className={iconClasses} />
    </button>
  )
}
export default CartButton
