import React, {useState, useEffect} from "react";

export const h3Styles = {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 500
}

export const pStyles = {
    fontSize: 14,
    margin: 0,
    color: '#b3b3b3'
}

function SearchResults({playlists, newplaylist, onAdd}){

    return(
       <div>
        {playlists.map(playlist => {
            return (
                <div key={playlist.id} style={{
                    borderBottom: '1px solid green',
                    padding: '20px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center"
                    }}>
                    <div style={{textAlign: 'left'}}>
                        <h3 style={h3Styles}>{playlist.songTitle}</h3>
                        <p style={pStyles}>{playlist.artist}</p>
                    </div>
                    <button onClick={() => onAdd(playlist)} style={{
                    }}>+</button>
                    
                </div>
            )})}
       </div>
    )
}

export default SearchResults;