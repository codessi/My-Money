import React, {useState} from 'react'

export default function TransactionForm() {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")


  const onSubmit = (e) => {
    e.preventDefault()
    console.log({name, amount})
  }
  console.log(name)

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="">
          <span>Transaction name</span>
          <input
            type="text"
            placeholder='name'
            id='name'
            value={name}
            required
            onChange={(e)=>setName(e.target.value)}
          />
        </label>
        
        <label htmlFor="">
          <span>Amount($)</span>
          <input
            type="number"
            placeholder='amount'
            id='amount'
            value={amount}
            required
            onChange={(e)=>setAmount(e.target.value)}
          />
        </label>

        <button type='submit'>Add Transaction</button>
      </form>
    </>
  )
}
