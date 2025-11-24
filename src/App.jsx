import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import NewPlaylist from './NewPlaylist'

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

const [newplaylist, setnewPlaylist] = useState([]);
  function onAdd(song){
  setnewPlaylist(prev => {
    let alreadyExists = prev.some(item => item.id === song.id);

    if (alreadyExists){
      return prev;
    } else{
      return [...prev, song];
    }
  })
}

function onRemove(song){
  setnewPlaylist(prev => prev.filter(item => item.id !== song.id))
}

const handleSearch = async (e) => {
  e.preventDefault();
  const bearerToken = "BQDiHjJiHD_P73gDHVyiMdo7DynErQBEVJySgmuJNx2ob-xkUf80ZVmsycwBfTikZY7elT5k_txgBiGSyOFezV3ON4sZeyUEU7Gs8TV3SCyDb4H2i5Xo2J6xak4RgJhlnk3yMfksP8s"
    try {
      setLoading(true)
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchItem}&type=track&limit=20`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
        if(response.ok){
          const jsonResponse = await response.json();
          const formattedResults = jsonResponse.tracks.items.map(track => ({
            id: track.id,
            songTitle: track.name,
            artist: track.artists.map(artist => artist.name).join(', ')
          }));
          setPlaylists(formattedResults)
        }else{
          throw new Error('Request failed')
        }
    }catch(error){
      console.error(`Error fetching: ${error}`)
    }finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Ja<span style={{color: 'purple'}}>mmm</span>ing</h1>
      <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch} loading={loading} isEmpty={isEmpty}/>
    <div style={{
      display: 'flex',
      gap: 50,
      padding: 40,
      minHeight: '100vh',
      color: '#ffffff',
      width: 1100
    }}>
      <div style={{width: '55%', border: '1px solid green'}}>
        <h2 style={{
          fontSize: 32,
          marginBottom: 20}}>Results</h2>
        <SearchResults playlists={playlists} newplaylist={newplaylist} onAdd={onAdd}/>
      </div>
      <div style={{width: '40%', border: '1px solid green'}}>
        <NewPlaylist newplaylist={newplaylist} onRemove={onRemove}/>
      </div>
    </div>
    </div>
   
  )
}

export default App
