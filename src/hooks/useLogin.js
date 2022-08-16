import { useContext, useEffect, useState } from "react";
import { auth } from "./../config";
import { AuthContext } from "../contexts/AuthContext";

export function useLogin() {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);
  // error, isPending, login??
  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await auth.signInWithEmailAndPassword(email, password);

      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete login");
      }

      // dispatch and update the state
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCanceled) {
        setError(null);
        setIsPending(false);
      }
    } catch (err) {
      if (!isCanceled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => {
      setIsCanceled(true);
    };
  }, []);

  return { error, isPending, login };
}
