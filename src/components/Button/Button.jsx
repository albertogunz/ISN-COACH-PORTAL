/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ darkMode, type, icon, className, labelClassName, text = "Get Started" }) => {
  return (
    <div className={`button dark-mode-${darkMode} ${type} ${className}`}>
      {!icon && <div className={`label ${labelClassName}`}>{text}</div>}

      {icon && (
        <>
          <div className="icon">
            <img
              className="SF-symbol-arrow"
              alt="Sf symbol arrow"
              src={
                type === "filled"
                  ? "https://generation-sessions.s3.amazonaws.com/c7a0c04b2482b52ca59165cd311cc388/img/sf-symbol---arrow-triangle-turn-up-right-circle-fill-7.svg"
                  : darkMode && ["gray", "plain", "tinted"].includes(type)
                  ? "https://generation-sessions.s3.amazonaws.com/c7a0c04b2482b52ca59165cd311cc388/img/sf-symbol---arrow-triangle-turn-up-right-circle-fill-2.svg"
                  : "https://generation-sessions.s3.amazonaws.com/c7a0c04b2482b52ca59165cd311cc388/img/sf-symbol---arrow-triangle-turn-up-right-circle-fill-6.svg"
              }
            />
          </div>
          <div className="label-2">{text}</div>
        </>
      )}
    </div>
  );
};

Button.propTypes = {
  darkMode: PropTypes.bool,
  type: PropTypes.oneOf(["plain", "gray", "filled", "tinted"]),
  icon: PropTypes.bool,
  text: PropTypes.string,
};
