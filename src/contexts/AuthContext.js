import React,{ createContext, useEffect, useReducer } from "react"
import {auth} from './../config'
export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return{...state,user: action.payload, authIsReady: true}
    default:
      return state
  }
}



export const AuthContextProvider = ({children}) => {

const [state, dispatch] = useReducer(authReducer, {
  user: null,
  authIsReady: false
})
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(
      (user) => {
        dispatch({ type: 'AUTH_IS_READY', payload: user })
        unsub() 
     }
    )
    // console.log('auth.onAuthStateChanged(',auth.onAuthStateChanged(()=> {}))
    // console.log(unsub)

  }, [])

  console.log('Authcontext state', state)
  

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}