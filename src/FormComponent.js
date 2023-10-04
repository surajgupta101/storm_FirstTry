import React, { Component } from 'react';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '', // To store the selected radio button value
      inputValue: '',    // To store the input field value
    };
  }

  handleRadioChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedOption, inputValue } = this.state;
    // Perform actions with selectedOption and inputValue
    console.log('Selected Option:', selectedOption);
    console.log('Input Value:', inputValue);
  }

  render() {
    const { selectedOption, inputValue } = this.state;

    return (
      <div>
        <h1>Form Example</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Radio Options:
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={this.handleRadioChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={this.handleRadioChange}
              />
              Option 2
            </label>
          </div>
          <div>
            <label>
              Input Field:
              <input
                type="text"
                value={inputValue}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormComponent;
