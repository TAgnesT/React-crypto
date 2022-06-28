import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Coin from './components/Coin';


function App() {

  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    axios.get("https://api.coinstats.app/public/v1/coins")
      .then(res => setCoinList(res.data.coins))

    //console.log(coinList)
  }, [])


  const searchedCoin = coinList.filter(coin => {
    
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })

  console.log(searchedCoin)

  return (
    <div className="App">
      <div className="crypto-header">
        <h1>Searching Crypto</h1>

        <input type="text" placeholder='Bitcoin...' onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="crypto-container">
        {
          searchedCoin.map(c => {

            return <Coin key={c.name} name={c.name} icon={c.icon} price={c.price} symbol={c.symbol} />
          })
        }
      </div>
    </div>
  );
}

export default App;
