import React, { Component } from 'react';
// import Form from './Form.js';


class Account extends Component {

  constructor(props){
    super(props);
    
    this.userInput = React.createRef();
    this.balanceDiv = React.createRef();
    
    this.state = {
      balance: 0
    }
  }

  balanceRef = (balanceDiv) => {
    this.balanceDiv = balanceDiv;
  }

  userInputRef = (inputElem) => {
    this.userInput = inputElem;
  }

  depositClick = (event) => {
      event.preventDefault();
      console.log(`depositClick`, event);

      let inputAmount = parseInt(this.userInput.value);

      if (this.userInput.value === '' || isNaN(inputAmount)){
        inputAmount = 0;
      };

      const newTotal = this.state.balance + inputAmount;

      this.setState({
        balance: newTotal
      });

      this.ifBalanceZero(newTotal);

      this.userInput.value = null;
  }

  withdrawClick = (event) => {
      event.preventDefault();
      console.log(`withdrawClick`, event);

      let inputAmount = parseInt(this.userInput.value);

      if (inputAmount === '' || isNaN(inputAmount)){
        inputAmount = 0;
      } else if (inputAmount > this.state.balance){
        inputAmount = this.state.balance
      } else {
        inputAmount = this.userInput.value;
      };

      const newTotal = this.state.balance - inputAmount;

      this.setState({
        balance: newTotal
      })

      this.ifBalanceZero(newTotal);

      this.userInput.value = null;
  }

  ifBalanceZero = (newTotal) => {
      if (newTotal === 0){
        this.balanceDiv.className += " zero";
      } else {
        this.balanceDiv.className = "balance";
      }
  }

  render() {
    console.log(this.userInput.value);
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div ref={this.balanceRef} className="balance">${this.state.balance}</div>
        <input ref={this.userInputRef} type="text" placeholder="enter an amount" />
        <input onClick={this.depositClick} type="button" value="Deposit" />
        <input onClick={this.withdrawClick} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
