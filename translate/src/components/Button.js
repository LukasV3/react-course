// USING CONSUMER APPROACH - best when trying to get info out of multiple different context objects inside of a single component

import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  /* arrow func will get automatically called by consumer with whatever value is inside pipe */
  render() {
    return (
      <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>
    );
  }
}

export default Button;
