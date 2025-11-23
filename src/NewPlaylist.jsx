import React, { useState, useEffect } from "react";

function NewPlaylist({ newplaylist, onRemove }){
    
    return(
        <div>
           <h3>Your Playlist</h3>
           {newplaylist.map(song => {
            return(
                <div key={song.id}>
                    <p>{song.artist}</p>
                    <button onClick={() => onRemove(song)}>-</button>
                </div>
            )
           })}
        </div>
    )
}

export default NewPlaylist;