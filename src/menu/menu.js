import React, { Component } from "react";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

class Menu extends Component {
  state = {
    menustate: "min",
  };

  menuToggle = () => {
    this.setState({
      menustate: this.state.menustate === "min" ? "max" : "min",
    });
  };

  render() {
    let navBarClass =
      this.state.menustate === "max" ? "sidenavbar" : "sidenavbar min";

    return (
      <div className={navBarClass}>
        <div onClick={this.menuToggle} className="minify-btn">
          <FontAwesomeIcon
            icon={
              this.state.menustate === "max"
                ? faArrowAltCircleLeft
                : faArrowAltCircleRight
            }
          />
        </div>
      </div>
    );
  }
}
export default Menu;
