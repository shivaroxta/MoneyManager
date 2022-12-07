import React from 'react'
import './index.css'

const TransactionItem = props => {
  const {historyDetails} = props
  const {title, amount} = historyDetails
  return (
    <ul>
      <li className="items">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
      </li>
    </ul>
  )
}
export default TransactionItem
