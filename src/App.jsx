import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import NewPlaylist from './NewPlaylist'

const mockData = [
  {
    id: 1,
    songTitle: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20"
  },
  {
    id: 2,
    songTitle: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "3:53"
  },
  {
    id: 3,
    songTitle: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14"
  }
]

function App() {
  const [item, setItem] = useState("");
  const [newplaylist, setnewPlaylist] = useState([]);
  const [playlists, setPlaylists] = useState([
  {
    id: 1,
    songTitle: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20"
  },
  {
    id: 2,
    songTitle: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "3:53"
  },
  {
    id: 3,
    songTitle: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14"
  }
]);

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


  return (
    <div style={{width: 1000, border: '1px solid red'}}>
      <h1>Ja<span style={{color: 'purple'}}>mmm</span>ing</h1>
      <SearchBar item={item} setItem={setItem}/>
      <h2>{item}</h2>
      <SearchResults playlists={playlists} newplaylist={newplaylist} onAdd={onAdd}/>
      <NewPlaylist newplaylist={newplaylist} onRemove={onRemove}/>
    </div>
    
   
  )
}

export default App
