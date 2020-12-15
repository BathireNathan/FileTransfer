import { Component } from "react";
import "./App.css";
import Menu from "./menu/menu";
import Container from "./contents/container";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Menu /> */}
        <Container/>
      </div>
    );
  }
}

export default App;
