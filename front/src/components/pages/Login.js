import React from "react"
import classes from "./Login.module.css"

const Login = (props) => {
  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <form onSubmit={props.onLogin} className={classes.form}>
        <input
          className={classes.input}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit" className={classes["submit-button"]}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
