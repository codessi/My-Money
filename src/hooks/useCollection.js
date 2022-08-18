import { useEffect, useState } from "react";
import {firestore} from './../config'

export function useCollection(collection) {

  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
   // calle the collection 
    // call db 
    const result = [] 
    const ref = firestore.collection(collection)
    const unsub = ref.onSnapshot(snapshot => {
      snapshot.docs.forEach(doc => {
        result.push({ ...doc.data(), id:doc.id })
      })

    setDocuments(result)
    setError(null)

    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    
  
    return () => {
     unsub()
    }
  }, [collection])
  
  return {documents, error}
}