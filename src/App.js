import React, {useState} from 'react';
import NavBar from './NavBar';
import MainForm from './MainForm';
import {
  useParams,
} from "react-router-dom";
import './App.css';

function App() {
  let multiplier = 2;
  let {coin, dollar} = useParams();

  const DEFAULT_COIN_SELECT = coin && dollar ? coin : 'btc';
  const DEFAULT_DOLLAR_SELECT = coin && dollar ? dollar : 'usd';
  const abbreviations = {
    'btc': 'Bitcoin',
    'ltc': 'Litecoin',
    'eth': 'Ethereum',
    'usd': 'US Dollar',
    'cad': 'Canadian Dollar',
    'eur': 'Euro'    
  };

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
    <div className="app">
      <NavBar></NavBar>
      <div className="main-content">
        <h1 className="title">{abbreviations[coinSelect]} to {abbreviations[dollarSelect]}</h1>
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

    </div>
  );
}

export default App;
