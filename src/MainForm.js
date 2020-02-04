import React from 'react';

function MainForm({coinValue, dollarValue, onCoinValueChange, onDollarValueChange}){
  return(
    <div className="main-form">
      <span id="coin-selector">
        <input type="number" value={coinValue} onChange={onCoinValueChange}/>
        <select>
          <option value="btc">Bitcoin</option>
          <option value="ltc">Litecoin</option>
          <option value="eth">Ethereum</option>
        </select>
      </span>
      =
      <span id="dollar-selector">
        <input type="number" value={dollarValue} onChange={onDollarValueChange}/>
        <select>
          <option value="usd">US Dollar</option>
          <option value="eur">Euro</option>
          <option value="cad">Canadian Dollar</option>
        </select>
      </span>
    </div>
  );
}

export default MainForm; 
