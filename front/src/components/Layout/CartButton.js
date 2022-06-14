import { useContext } from "react"
import CartContext from "../../store/cart-context"
import { FiShoppingCart } from "react-icons/fi"
import classes from "./CartButton.module.css"

const CartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      Cart <FiShoppingCart className={classes.icon} />
    </button>
  )
}
export default CartButton
