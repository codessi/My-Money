import style from './Navbar.module.css'
import {useLogout} from './../hooks/useLogout'
import React from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from './../hooks/useAuthContext'

const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()
  

  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.title} >
          myMoney
        </li> 

       { !user && <>
          <li>
            <Link to='/login' >Login</Link>
          </li>
          <li>
            <Link to='/signup' >Signup</Link>
          </li>
        </>}
        {user && <>
          <p>Hello, &nbsp;{user.displayName} </p>
          <li>
            <button className='btn' onClick={logout}>Logout</button>
          </li>
        </>}
      </ul>
    </nav>
  )
}

export default Navbar