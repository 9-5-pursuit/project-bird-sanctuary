import React, { Component } from "react";

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: 0,
    };
  }
  birdFormSubmit = (e) => {
    e.preventDefault();
    e.reset();
  };

  birdFirstNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      firstName: value,
    });
  };

  birdLastNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      lastName: value,
    });
  };

  birdEmailChange = (e) => {
    const { value } = e.target;
    this.setState({
      email: value,
    });
  };

  birdZipCodeChange = (e) => {
    const { value } = e.target;
    this.setState({
      zipCode: value,
    });
  };

  render() {
    <form onSubmit={this.birdFormSubmit} className="form-container">
      <h2>Checkout</h2>
      <imput
        id="text"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={this.birdFirstNameChange}
      />
      <br />
      <imput
        id="text"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={this.birdLastNameChange}
      />
      <br />
      <imput
        id="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={this.birdEmailChange}
      />
      <br />
      <imput
        id="text"
        name="zipCode"
        value={zipCode}
        placeholder="Zip Code"
        onChange={this.birdZipCodeChange}
      />
      <br />
      <button onSubmit={""} type="Submit"></button>
    </form>;
  }
}

export default Checkout;
