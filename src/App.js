import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
      );
      return setCoins(response.data.coins);
    };
    fetchData();
  }, []);

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Ethereum ..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filterCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              icon={coin.icon}
              symbol={coin.symbol}
              price={coin.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
