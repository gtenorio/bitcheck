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
          <option value="btc">Bitcoin</option>
          <option value="ltc">Litecoin</option>
          <option value="eth">Ethereum</option>
        </select>
      </span>
      =
      <span id="dollar-selector">
        <input type="text" value={dollarValue} onChange={onDollarValueChange}/>
        <select id="dollar-select" value={dollarSelect} onChange={onSelect}>
          <option value="usd">US Dollar</option>
          <option value="eur">Euro</option>
          <option value="cad">Canadian Dollar</option>
        </select>
      </span>
    </div>
  );
}

export default MainForm; 
