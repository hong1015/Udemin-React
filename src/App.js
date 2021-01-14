import React, { Component } from "react";
import "./App.css";
import "./Char/Char";
import Validation from "./Validation/Validation.js";
import Char from "./Char/Char.js";

class App extends Component {
  state = {
    text: ""
  };
  textAmount = (event) => {
    const text = event.target.value;

    this.setState({
      text: text
    });
  };
  removeLetter = (pos) => {
    const textArr = this.state.text.split("");
     textArr.splice(pos, 1);
     const newTxt = textArr.join("")
    this.setState({
      text: newTxt
    });
  };
  render() {
      const textArr = this.state.text.split("");
      let char = textArr.map((l, i) => {
        return <Char key={i} pos={i} letter={l} click={() => this.removeLetter(i)} />;
      });
    

    return (
      <div className="App">
        <input onChange={this.textAmount} value={this.state.text} type="text" />
        <p>{this.state.text}</p>
        <Validation lenght={this.state.text.length} />
        {char}
      </div>
    );
  }
}

export default App;
