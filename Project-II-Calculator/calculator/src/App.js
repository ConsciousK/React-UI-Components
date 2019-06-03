import React from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <main className="CalculatorContainer">
      <CalculatorDisplay text="0" />

      <div className="NumbersContainer">
        <ActionButton ButtonStyle="ActionButton" text="clear" />
        <NumberButton ButtonStyle="NumberButton" text="1" />
        <NumberButton ButtonStyle="NumberButton" text="2" />
        <NumberButton ButtonStyle="NumberButton" text="3" />
        <NumberButton ButtonStyle="NumberButton" text="4" />
        <NumberButton ButtonStyle="NumberButton" text="5" />
        <NumberButton ButtonStyle="NumberButton" text="6" />
        <NumberButton ButtonStyle="NumberButton" text="7" />
        <NumberButton ButtonStyle="NumberButton" text="8" />
        <NumberButton ButtonStyle="NumberButton" text="9" />
        <ActionButton ButtonStyle="ActionButton" text="0" />
      </div>

      <div className="OperatorsContainer">
        <NumberButton ButtonStyle="OperatorButton" text="÷"/>
        <NumberButton ButtonStyle="OperatorButton" text="x"/>
        <NumberButton ButtonStyle="OperatorButton" text="-"/>
        <NumberButton ButtonStyle="OperatorButton" text="+"/>
        <NumberButton ButtonStyle="OperatorButton" text="="/>
      </div>

    </main>
  );
};

export default App;
