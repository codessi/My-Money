import { useState, useContext } from "react";
import { auth } from "../config";
import { AuthContext } from "../contexts/AuthContext";

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [dispatch] = useContext(AuthContext);

  const logout = async () => {
    setIsPending(true);
    setError(null);

    try {
      await auth.signOut();
      dispatch({ type: "LOGOUT" });
      setError(null)
      setIsPending(false)

    } catch (err) {
      console.log(err.message)
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, logout };
};
