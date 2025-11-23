import React, {useState, useEffect} from "react";

function SearchResults({playlists, newplaylist, onAdd}){

    return(
       <div>
        {playlists.map(playlist => {
            return (
                <div key={playlist.id}>
                    <h2>{playlist.songTitle}</h2>
                    <p>{playlist.artist}</p>
                    <button onClick={() => onAdd(playlist)}>+</button>
                    <p>-------------------------------------------</p>
                    
                </div>
            )})}
       </div>
    )
}

export default SearchResults;