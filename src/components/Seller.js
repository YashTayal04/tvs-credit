import React, { Component } from "react";

export default class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      invoiceDate: "",
      invoiceAmt: "",
      buyer: "",
      id: "",
      mobile_no: 0,
    };
  }
  setName = (name) => {
    console.log(name);
  };

  submitInvoiceDetails = () => {
    console.log("Calling submitInvoiceDetails",this.state)
    this.props.registerInvoice(
      this.state.companyName,
      this.state.invoiceDate,
      this.state.invoiceAmt,
      this.state.buyer,
      this.state.id,
      this.state.mobile_no
    );
  };
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Seller</h1>
        <form>
          <label>
            Enter invoice ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Enter company name:
            <input
              type="text"
              name="companyName"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Enter Invoice Date:
            <input
              name="invoiceDate"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Enter Invoice Amount:
            <input type="text" name="invoiceAmt" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Choose Buyer:
            <input
              type="text"
              name="buyer"
              value={this.state.buyer}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input
            type="submit"
            value="submit"
            onClick={this.submitInvoiceDetails}
          />
        </form>
      </div>
    );
  }
}
