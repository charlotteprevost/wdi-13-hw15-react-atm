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
  //     event.preventDefault();
  //     const inputAmount = this.userInput.value;
  //     const newTotal = this.state.balance + inputAmount;
  //     this.setState({
  //       balance: newTotal
  //     })
  //     this.userInput.value = null;
    console.log(this.userInput.value);
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input ref={input => this.userInput = input} type="text" placeholder="enter an amount" />
        <input onClick={this.depositClick} type="button" value="Deposit" />
        <input onClick={this.withdrawClick} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
