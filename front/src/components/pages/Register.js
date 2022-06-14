import React from "react"
import classes from "./Register.module.css"

const Register = (props) => {
  return (
    <div className={classes.container}>
      <h1>Register</h1>
      <form className={classes.form} onSubmit={props.onRegister}>
        <input
          className={classes.input}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className={classes.input}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className={classes.input}
          type="password"
          name="password2"
          placeholder="Repeat password"
        />
        <button className={classes["submit-button"]} type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
