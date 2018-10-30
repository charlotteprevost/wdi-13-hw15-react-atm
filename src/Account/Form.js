import React, { Component } from 'react';

class Form extends Component {

	constructor() {
		super();
		this.userInput = React.createRef();
	}
  
  userInputRef = (inputElem) => {
    this.userInput = inputElem;
  }

	transferOver = (e) => {
		e.preventDefault();


	}

	render(){
		console.log(`this.props.name`, this.props.name);
		return(
			<div>
				<form>
					FORM:
					<input ref={this.userInputRef} type="text" placeholder="transfer over"/>
	        <input onClick={this.transferOver} type="button" value="Tranfer" />
				</form>
			</div>
		)
	}
}

export default Form;