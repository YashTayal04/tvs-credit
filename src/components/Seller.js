import React, { Component } from "react";

export default class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ford" };
  }
  setName = (name) => {
    console.log(name);
  };
  render() {
    return (
      <div>
        <form>
          <label>
            Enter invoice ID:
            <input
              type="text"
              value={this.state.invoiceID}
              onChange={(e) => this.setName(e.target.value)}
            />
          </label>
          <br />

          <label>
            Enter company name:
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Enter Invoice Date:
            <input
              type="text"
              value={this.state.invoiceDate}
              onChange={(e) => this.setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Enter Invoice Amount:
            <input
              type="text"
              value={this.state.invoiceAmt}
              onChange={(e) => this.setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Choose Buyer:
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setName(e.target.value)}
            />
          </label>
          <br />
          <input
            type="submit"
            value="submit"
            onChange={(e) => this.setName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
