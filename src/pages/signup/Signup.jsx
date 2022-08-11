import styles from './Signup.module.css'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import { useSignup } from './../../hooks/useSignup'

 
const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const {signup, error, isPending } = useSignup()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, userName)
    signup(email, password, userName)
  }

  return (
    <form action="" className={styles['signup-form']} onSubmit= {onSubmit}>
      <h2>Sign Up</h2>

      <label htmlFor="">
        <span>User Name</span>
        <input type="Text" id="userName" value={userName} onChange={(e) => {
          setUserName(e.target.value)
        } } />
      </label>

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

      {!isPending && <button className="btn" type='submit'>Signup</button>}
      {isPending && <button className="btn" disabled type='submit'>Loading</button>}
      {error && <p>{error}</p>}
      
   </form>
  )
}

export default Signup