import React from "react";

function Coin(props) {
  const { name, icon, symbol, price } = props;

  return (
    <div className="coin">
      <h1>Name: {name}</h1>
      <img src={icon} alt={name} />
      <h3>Price: {price}</h3>
      <h3>Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
