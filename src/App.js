import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
// new
import { connect } from "react-redux";
import { addCounter } from "./redux/Actions/addCounter";
import { decreaseCounter } from "./redux/Actions/decreaseCounter";

class App extends Component {
  handelCounter = () => {
    this.props.addCounter();
  };
  minusHandler = () => {
    this.props.decreaseCounter();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.counter}
          <div>
            <button onClick={this.handelCounter}>+</button>
            <button onClick={this.minusHandler}>-</button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.add,
  };
};
const mapDispatchToProprs = {
  addCounter: addCounter,
  decreaseCounter: decreaseCounter,
};

export default connect(mapStateToProps, mapDispatchToProprs)(App);
