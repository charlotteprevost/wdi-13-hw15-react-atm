import React, { Component } from 'react';


class Account extends Component {

  constructor(props){
    super(props);
    
    this.userInput = React.createRef();
    
    this.state = {
      balance: 0
    }
  }

  depositClick = (event) => {
      event.preventDefault();
      const inputAmount = this.userInput.value;

      console.log(`inputAmount: `, inputAmount);

      const newTotal = this.state.balance + parseInt(inputAmount);

      console.log(`newTotal: `, newTotal);

      this.setState({
        balance: newTotal
      })
      // this.userInput.value = null;
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input ref={input => this.userInput = input} type="text" placeholder="enter an amount" />
        <input onClick={this.depositClick} type="button" value="Deposit" />
        <input onClick={this.withdrawClick} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
