import React, { useState, useEffect } from "react";

function NewPlaylist({ newplaylist, onRemove }){
    
    return(
        <div>
           <h2>Your Playlist</h2>
           {newplaylist.map(song => {
            return(
                <div key={song.id} style={{
                    borderBottom: '1px solid red',
                    padding: '5px 10px',
                    margin: 0,
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    marginBottom: 20,
                    textAlign: 'left'
                }}>
                    <div>
                        <h3 style={{
                            fontSize: 18,
                            marginBottom: 8,
                            fontWeight: '500'
                        }}>{song.songTitle}</h3>
                        <p style={{
                            fontSize: 14,
                            color: '#b3b3b3',
                            margin: 0
                        }}>{song.artist}</p>
                    </div>
                    <button onClick={() => onRemove(song)}>-</button>
                </div>
            )
           })}
            <button type='submit' style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#1DB954',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                    }}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default NewPlaylist;