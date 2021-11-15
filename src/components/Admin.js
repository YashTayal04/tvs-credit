import React, { Component } from "react";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var x = this.props.getInvoice(10);
    console.log("Invoice:", x);
  }
  render() {
    return <div></div>;
  }
}
