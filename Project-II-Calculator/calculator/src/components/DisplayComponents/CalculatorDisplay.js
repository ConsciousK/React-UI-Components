import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
      <div className="CalculatorDisplay">
        {props.text}
      </div>
    );
  };
export default CalculatorDisplay;