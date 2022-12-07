// eslint-disable-next-line
import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

// eslint-disable-next-line
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    titleInput: '',
    amountInput: '',
    historyList: [],
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onSubmitAddNewTransactions = event => {
    event.preventDefault()
    const {
      balance,
      income,
      expenses,
      // eslint-disable-next-line
      titleInput,
      // eslint-disable-next-line
      amountInput,
      // eslint-disable-next-line
      historyList,
    } = this.state
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newTransaction],
      titleInput: '',
      amountInput: '',
    }))
  }

  onChangeSelect = event => {
    this.setState({})
  }

  render() {
    const {
      balance,
      income,
      expenses,
      // eslint-disable-next-line
      titleInput,
      // eslint-disable-next-line
      amountInput,
      // eslint-disable-next-line
      historyList,
    } = this.state
    return (
      <div className="container">
        <div className="title">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            Welcome back to your{' '}
            <span className="spanElement"> Money Manager</span>
          </p>
        </div>
        <div className="money-container">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="bottom-container">
          <div className="transaction">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onSubmitAddNewTransactions}>
              <label htmlFor="title-input" className="label-element">
                TITLE
              </label>
              <input
                type="text"
                id="title-input"
                className="titleInput input"
                placeholder="TITLE"
                onChange={this.onChangeTitleInput}
                value={titleInput}
              />
              <label htmlFor="amount-input" className="label-element">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount-input"
                className="amountInput input"
                placeholder="AMOUNT"
                onChange={this.onChangeAmountInput}
                value={amountInput}
              />
              <label className="label-element" htmlFor="active">
                TYPE
              </label>
              <select
                id="active"
                onChange={this.onChangeSelect}
                className="select-element"
              >
                <option value="Active">Income</option>
                <option value="Inactive">Expenses</option>
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1 className="history-heading">History</h1>
            <ul className="history-items">
              {historyList.map(eachItem => (
                <TransactionItem id={eachItem.id} historyDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
