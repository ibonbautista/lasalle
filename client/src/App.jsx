import { useEffect, useState } from 'react';

import PlayerCard from './components/playerCard/PlayerCard';
import PlayerList from './components/playerList/PlayerList';
import fetchData from './utils/api/fetch.js';

import './App.css'

function App() {
  //ESTADOS
  const [count, setCount] = useState(0);
  const [players, setPlayers] = useState([]); //array vacio

  //EFECTOS
  useEffect(() => {
    handleFetchData();
  },[]);

  //HANDLES
  const handleFetchData = async() => {
    const data = await fetchData('/players'); //hacemos el fetch
    setPlayers(data); //no se puede asignar sirectamente, usamos el set
  }

  return (
    <>
      <PlayerList players={players} />
    </>
  )
}

export default App
