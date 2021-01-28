// USING THIS.CONTEXT APPROACH

import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  // same as putting Button.contextType = LangaugeContext (not needed if using Consumer)

  render() {
    const text = this.context === "english" ? "Name" : "Naam";

    return (
      <div className="field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
