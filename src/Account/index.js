import React, { Component } from 'react';


class Account extends Component {

  constructor(props){
    super(props);
    
    this.userInput = React.createRef();
    this.balanceDiv = React.createRef();
    
    this.state = {
      balance: 0
    }
  }

  logItAll = () => {
      console.log(`userInput: `, this.userInput.value);
      // console.log(`this.inputElem: `, this.inputElem);
  }

  balanceRef = (balanceDiv) => {
    this.balanceDiv = balanceDiv;
  }

  userInputRef = (inputElem) => {
    this.userInput = inputElem;
  }

  depositClick = (event) => {
      event.preventDefault();
      const inputAmount = this.userInput.value;
      const newTotal = this.state.balance + parseInt(inputAmount);
      this.setState({
        balance: newTotal
      })
      this.userInput.value = null;
  }

  withdrawClick = (event) => {
      event.preventDefault();
      
      let inputAmount = this.userInput.value;

      if (inputAmount > this.state.balance){
        inputAmount = this.state.balance
      } else {
        inputAmount = this.userInput.value;
      }

      const newTotal = this.state.balance - parseInt(inputAmount);

      this.setState({
        balance: newTotal
      })

      if (newTotal === 0){
        this.balanceDiv.className += " zero";
      } else {
        this.balanceDiv.className = "balance";
      }

      this.userInput.value = null;
  }

  render() {
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
