import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function MainForm({coinValue, dollarValue, onCoinValueChange, onDollarValueChange, coinSelect, dollarSelect, onSelect, didMount, setDidMount}){
  let history = useHistory();

  useEffect(() => {
    if(didMount){
      let path = `/${coinSelect}/${dollarSelect}`;
      history.push(path)
    }
    else{
      setDidMount(true);
    }
  }, [coinSelect, dollarSelect]);

  return(
    <div className="main-form">
      <span id="coin-selector">
        <input type="text" value={coinValue} onChange={onCoinValueChange}/>
        <select id="coin-select" value={coinSelect} onChange={onSelect}>
          <option value="btc">BTC</option>
          <option value="ltc">LTC</option>
          <option value="eth">ETH</option>
        </select>
      </span>
      =
      <span id="dollar-selector">
        <input type="text" value={dollarValue} onChange={onDollarValueChange}/>
        <select id="dollar-select" value={dollarSelect} onChange={onSelect}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="cad">CAD</option>
        </select>
      </span>
    </div>
  );
}

export default MainForm; 
