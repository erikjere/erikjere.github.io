import classes from "./Header.module.css"
import CartButton from "./../Layout/CartButton"

const Header = (props) => {
  const setPageLogin = () => {
    props.setPage("Login")
  }
  const setPageRegister = () => {
    props.setPage("Register")
  }
  const setPageHome = () => {
    props.setPage("Home")
  }

  const showCart =
    (props.page === "Home" || props.page === "About") &&
    props.userType !== "vendor"

  const navbar = () => {
    return (
      <div>
        {props.isLoggedIn ? (
          <span>
            <button className={classes.user}>Hi, {props.isLoggedIn}</button>
            <button className={classes.navlink} onClick={props.onLogout}>
              Logout
            </button>
          </span>
        ) : (
          <span>
            <button className={classes.navlink} onClick={setPageLogin}>
              Login
            </button>
            <button className={classes.navlink} onClick={setPageRegister}>
              Register
            </button>
          </span>
        )}
        {showCart && (
          // <button className={classes.navlink} onClick={props.onShowCart}>
          //   Cart
          // </button>
          <CartButton onClick={props.onShowCart} />
        )}
      </div>
    )
  }

  return (
    <nav className={classes.navbar}>
      <button className={classes.logo} onClick={setPageHome}>
        Afoo(r)dable
      </button>
      {navbar()}
    </nav>
  )
}

export default Header
