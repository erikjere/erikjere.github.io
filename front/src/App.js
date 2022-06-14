import React, { useState } from "react"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Checkout from "./components/pages/Checkout"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import CartProvider from "./store/CartProvider"
import About from "./components/pages/About"

import users from "./users.json"

function App() {
  const [page, setPage] = useState("Home")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [userType, setUserType] = useState("")

  const onLogin = (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    const user = users.find((user) => user.username === username)
    if (user && user.password === password) {
      setIsLoggedIn(user.name)
      setUserType(user.type)
      setPage("Home")
    } else {
      alert("Wrong username or password")
    }
  }

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  const onLogout = () => {
    setIsLoggedIn(false)
    setPage("Home")
  }

  const content = () => {
    if (page === "Home") {
      return (
        <Home
          setPage={setPage}
          showCart={showCart}
          onHideCart={hideCartHandler}
        />
      )
    } else if (page === "Login") {
      return <Login onLogin={onLogin} />
    } else if (page === "Register") {
      return <Register />
    } else if (page === "Checkout") {
      return <Checkout />
    } else if (page === "About") {
      return <About />
    }
  }

  return (
    <CartProvider>
      <Header
        onShowCart={showCartHandler}
        isLoggedIn={isLoggedIn}
        setPage={setPage}
        page={page}
        onLogout={onLogout}
        userType={userType}
      />
      {content()}
      <Footer setPage={setPage} />
    </CartProvider>
  )
}

export default App
