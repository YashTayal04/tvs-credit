import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import InfoDisplay from "./components/InfoDisplay";
// import Footer from "./components/Footer";
import Web3 from "web3";
import Seller from "./components/Seller";
import Admin from "./components/Admin";

var provider = new Web3(
  new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
);

provider.eth.defaultAccount = provider.eth.accounts[0];
var MyInvoiceContract = provider.eth.contract([
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "invoiceIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "invoices",
    outputs: [
      {
        internalType: "string",
        name: "companyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "invoiceDate",
        type: "string",
      },
      {
        internalType: "string",
        name: "invoiceAmt",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "buyer",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "mobile_no",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "discounted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "companyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "invoiceDate",
        type: "string",
      },
      {
        internalType: "string",
        name: "invoiceAmt",
        type: "string",
      },
      {
        internalType: "string",
        name: "buyer",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mobile_no",
        type: "uint256",
      },
    ],
    name: "registerInvoice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "validateInvoice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "discountInvoice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getInvoice",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getUnverifiedList",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getUndiscountedList",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
]);
var MyContract = provider.eth.contract([
  {
    constant: true,
    inputs: [],
    name: "get",
    outputs: [{ name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "x", type: "bytes32" }],
    name: "set",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
]);
var contract = MyContract.at("0xDbF48d7fF37A67f9f5F1Ec69CD9ca51bf4dcAd01");
var invoiceContract = MyInvoiceContract.at(
  "0x1a76d67dbd110b385AeefcBB3D41103F6d21F7B8"
);

console.log(contract);
console.log(invoiceContract);

var balance = provider.eth.getBalance(provider.eth.defaultAccount);

class App extends Component {
  constructor(props) {
    console.log("Inside App.js ");

    super(props);

    this.state = {
      accountNumber: "",
      word: "",
      confirmWord: "",
      accountBalance: null,
      gasPrice: null,
      invoices: [],
    };
    this.storeWord = this.storeWord.bind(this);
    this.getWord = this.getWord.bind(this);
    this.getBalance = this.getBalance.bind(this);
    this.getGasPrice = this.getGasPrice.bind(this);
    this.showAccount = this.showAccount.bind(this);

    this.registerInvoice = this.registerInvoice.bind(this);
    // this.validateInvoice = this.validateInvoice.bind(this);
    // this.discountInvoice = this.discountInvoice.bind(this);
    this.getInvoice = this.getInvoice.bind(this);
    // this.getUnverifiedList = this.getUnverifiedList.bind(this);
    // this.getUndiscountedList = this.getUndiscountedList.bind(this);
  }

  componentDidMount() {
    console.log(invoiceContract.getUnverifiedList());
  }
  storeWord = () => {
    return contract.setWord("Abhishek");
  };

  getWord = () => {
    return this.setState({ word: contract.getWord() });
    // console.log(contract.getWord());
    // var x = contract.methods.setWord("ABC").send();
    // console.log(x);
  };

  getBalance = () => {
    return this.setState({ accountBalance: Number(balance) });
  };

  getGasPrice = () => {
    return this.setState({ gasPrice: provider.eth.gasPrice });
  };

  showAccount = () => {
    return this.setState({ accountBalance: provider.eth.defaultAccount });
  };

  registerInvoice = (
    companyName,
    invoiceDate,
    invoiceAmt,
    buyer,
    id,
    mobile_no
  ) => {
    console.log("Inside registerInvoice");
    return invoiceContract.registerInvoice(
      companyName,
      invoiceDate,
      invoiceAmt,
      buyer,
      id,
      mobile_no,
      { from: provider.eth.accounts[1], gas: 3000000 }
    );
  };

  getInvoice = (id) => {
    return invoiceContract.getInvoice(id);
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <InfoDisplay
          storeWord={this.storeWord}
          getWord={this.getWord}
          getBalance={this.getBalance}
          getGasPrice={this.getGasPrice}
          showAccount={this.showAccount}
          balance={this.state.accountBalance}
          word={this.state.word}
          gasPrice={this.state.gasPrice}
        />

        <Seller registerInvoice={this.registerInvoice}></Seller>
        <Admin getInvoice={this.getInvoice}></Admin>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
