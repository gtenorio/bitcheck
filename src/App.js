import React, {useState} from 'react';
import NavBar from './NavBar';
import MainForm from './MainForm';
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  let multiplier = 2;
  let {coin, dollar} = useParams();
  //TODO fix routing params
  console.log(coin, dollar)
  const DEFAULT_COIN_SELECT = coin && dollar ? coin : 'btc';
  const DEFAULT_DOLLAR_SELECT = coin && dollar ? dollar : 'usd';
  let [coinValue, setCoinValue] = useState(1);
  let [dollarValue, setDollarValue] = useState(coinValue * multiplier);
  let [coinSelect, setCoinSelect] = useState(DEFAULT_COIN_SELECT);
  let [dollarSelect, setDollarSelect] = useState(DEFAULT_DOLLAR_SELECT);
  const [didMount, setDidMount] = useState(false);

  if((coin && !dollar) || (dollar && !coin)) return(<div>NO</div>)

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

  const onSelect = (e) => {
    if(e.target.id === 'coin-select')
      setCoinSelect(e.target.value);
    else
      setDollarSelect(e.target.value);
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <MainForm
        coinValue={coinValue}
        dollarValue={dollarValue}
        onCoinValueChange={onCoinValueChange}
        onDollarValueChange={onDollarValueChange}
        coinSelect={coinSelect}
        dollarSelect={dollarSelect}
        onSelect={onSelect}
        didMount={didMount}
        setDidMount={setDidMount}
      ></MainForm>
    </div>
  );
}

export default App;
