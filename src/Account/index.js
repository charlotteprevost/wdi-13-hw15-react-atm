import React, { Component } from 'react';


class Account extends Component {

  constructor(props){
    super(props);
    
    this.userInput = React.createRef();
    
    this.state = {
      balance: 0
    }
  }

  logItAll = () => {
      console.log(`userInput: `, this.userInput.value);
      // console.log(`this.inputElem: `, this.inputElem);
  }

  makeRef = (inputElem) => {
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
      this.userInput.value = null;
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input ref={this.makeRef} type="text" placeholder="enter an amount" />
        <input onClick={this.depositClick} type="button" value="Deposit" />
        <input onClick={this.withdrawClick} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
