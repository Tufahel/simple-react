import { useState } from 'react';
import './App.css';
import BuyPlayer from './components/BuyPlayer/BuyPlayer';
import Header from './components/Header/Header';
import Player from './components/Player/Player';


function App() {
  
  const [cart, setCart] = useState([]);
  const [player, setPlayer] = useState([]);
  const handleAddPlayer = (price, name) => {
    const newCart = [...cart, price];
    const newPlayer = [...player, name]
    setCart(newCart);
    setPlayer(newPlayer);
  }

  
  return (
    <div className="App">
      <Header></Header>
      <div className="player-section">
        {/* <Player handleAddPlayer={handleAddPlayer}></Player>
        <BuyPlayer cart={cart} name={player}></BuyPlayer> */}
        <Player handleAddPlayer={handleAddPlayer}></Player>
        <BuyPlayer cart={cart} name={player}></BuyPlayer>
      </div>
    </div>
  );
}

export default App;
