// eslint-disable-next-line
import React from 'react'
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <ul className="money-list">
      <li className="list-1 list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img img"
        />
        <div>
          <p className="balance">Your Balance</p>
          <p className="cost">Rs {balance}</p>
        </div>
      </li>
      <li className="list-2 list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="income-img img"
        />
        <div>
          <p className="balance">Your Income</p>
          <p className="cost">Rs {income}</p>
        </div>
      </li>

      <li className="list-3 list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="expenses-img img"
        />
        <div>
          <p className="balance">Your Expenses</p>
          <p className="cost">Rs {expenses}</p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
