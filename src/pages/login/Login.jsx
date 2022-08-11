import styles from './Login.module.css'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form action="" className={styles['login-form']} onSubmit= {onSubmit}>
      <h2>Login</h2>
      <label htmlFor="">
        <span>Email:</span>
        <input type="email" id="email" value={email} onChange={(e) => {
          setEmail(e.target.value)
        } } />
      </label>
      

      <label htmlFor="">
        <span>Password:</span>
        <input type="password" value={password} id="password" onChange={e => setPassword(e.target.value)} />
      </label>

      <button className="btn" type='submit'>Login</button>
      
   </form>
  )
}

export default Login