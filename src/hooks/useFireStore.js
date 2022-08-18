import React, { useReducer, useState, useEffect } from "react";
import { firestore } from "./../config";

export default function useFireStore(collection) {
  let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null,
  };
  const firestoreReducer = (state, action) => {
    switch (action.type) {
      case "IS_PENDING":
        return {
          document: null,
          error: null,
          success: null,
          isPending: true,
        };
      case "ADDED DOCUMENT":
        return {
          isPending: false,
          document: action.payload,
          error: null,
          success: true,
        };
      case "ERROR":
        return {
          isPending: false,
          document: null,
          error: action.payload,
          success: false,
        };
      default:
        return state;
    }
  };

  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = firestore.collection(collection);
  const dispatcheIfNotCanceled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const addedDocument = await ref.add(doc);
      dispatcheIfNotCanceled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (error) {
      dispatcheIfNotCanceled({ type: "ERROR", payload: error.message });
    }
  };

  const deleteDocumet = (doc) => {};

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocumet };
}
