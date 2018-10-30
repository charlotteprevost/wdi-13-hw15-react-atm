import React, { Component } from 'react';
import logo from './ga.png';
import Account from './Account';

class App extends Component {
  constructor(props){
    super(props);
    
    this.userInput = React.createRef();
    this.balanceDiv = React.createRef();
    
    this.state = {
      balance: 0
    }
  }

  userInputRef = (inputElem) => {
    this.userInput = inputElem;
  }

  transferOver = (event) => {
    event.preventDefault();

    if (this.props.name === "Checkings"){
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
    } else {
      console.log(`this.props.name === "Checkings" IS FALSE `);
    }
  } 
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name="Checkings"/>
        <Account name="Savings"/>
        <form>
          FORM:
          <input ref={this.userInputRef} type="text" placeholder="transfer over"/>
            <select>
              <option ref={this.toChecking} value="toChecking">Transfer from Savings to Checkings</option>
              <option ref={this.toSavings} value="toSavings">Transfer from Checkings to Savings</option>
            </select>
          <input onClick={this.transferOver} type="button" value="Transfer" />
        </form>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;

