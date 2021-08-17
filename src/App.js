import React from "react";
import PropTypes from "prop-types";
import { current } from "immer";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rending"); // <- 최초에 랜딩이 된후에 동작
  }
  componentDidUpdate() {
    console.log("component Update"); //<- component에 변화가 생길때 만 동작, 지금같은 경우에서는 setState가 생겨 랜딩을 다시 하기 때문에
  }
  render() {
    console.log("I'm rending");
    return (
      <div>
        <h1>The numver is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus </button>
      </div>
    );
  }
}

export default App;
