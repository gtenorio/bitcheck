import React, {useState} from 'react';
import NavBar from './NavBar';
import MainForm from './MainForm';
import './App.css';

function App() {
  let multiplier = 2;
  let [coinValue, setCoinValue] = useState(1);
  let [dollarValue, setDollarValue] = useState(coinValue * multiplier);


  const onCoinValueChange = (e) => {
    e.preventDefault();
    setCoinValue(e.target.value);
    setDollarValue(Number(e.target.value) * multiplier);
  }

  const onDollarValueChange = (e) => {
    e.preventDefault();
    setDollarValue(e.target.value);
    setCoinValue(Number(e.target.value) / multiplier);
  }


  return (
    <div className="App">
      <NavBar></NavBar>
      <MainForm
        coinValue={coinValue}
        dollarValue={dollarValue}
        onCoinValueChange={onCoinValueChange}
        onDollarValueChange={onDollarValueChange}
      ></MainForm>
    </div>
  );
}

export default App;
