import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import InfoDisplay from "./components/InfoDisplay";
// import Footer from "./components/Footer";
import Web3 from "web3";
import Seller from "./components/Seller";

var provider = new Web3(
  new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
);

provider.eth.defaultAccount = provider.eth.accounts[0];

var MyContract = provider.eth.contract([
  {
    inputs: [],
    name: "word",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "_value",
        type: "string",
      },
    ],
    name: "setWord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWord",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
]);

var contract = MyContract.at("0xDbF48d7fF37A67f9f5F1Ec69CD9ca51bf4dcAd01");
console.log(contract);

var balance = provider.eth.getBalance(provider.eth.defaultAccount);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNumber: "",
      word: "",
      confirmWord: "",
      accountBalance: null,
      gasPrice: null,
    };
    this.storeWord = this.storeWord.bind(this);
    this.getWord = this.getWord.bind(this);
    this.getBalance = this.getBalance.bind(this);
    this.getGasPrice = this.getGasPrice.bind(this);
    this.showAccount = this.showAccount.bind(this);
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
        <Seller></Seller>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
