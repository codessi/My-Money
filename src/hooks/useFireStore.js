import React, { useReducer, useState, useEffect } from "react";
import { firestore } from "./../config";

export default function useFireStore(collection) {
  let initialState = {
    document: null,
    isPending: false,
    error: null
  };
  const firestoreReducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false)


  const ref = firestore.collection(collection)
  const addDocument = (doc) => {}
  const deleteDocumet = (doc) => { }
  
  useEffect(() => { 
    return () => {
      setIsCancelled(true)
    }
  }, [])
  
  return {addDocument, deleteDocumet}
}
