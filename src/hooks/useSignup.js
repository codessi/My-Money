import { useContext, useState } from "react"
import { auth } from './../config'
import { AuthContext } from "../contexts/AuthContext"


export function useSignup() {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useContext(AuthContext)
  // error, isPending, signup??
  const signup = async(email, password, displayName) => {
    setError(null)
    setIsPending(true)
    

    try { 
      const res = await auth.createUserWithEmailAndPassword(email, password)
      
      console.log(res.user)

      if (!res) {
        throw new Error("Could not complete signup")
      }

      await res.user?.updateProfile({ displayName })

      // dispatch and update the state
      dispatch({type: 'LOGIN', payload: res.user})

      setIsPending(false)
      setError(null)
    }
    catch (error) {
      console.log(error.message)
      setError(error.message)
      setIsPending(false)
    }
  }

  return {error, isPending, signup}

}
