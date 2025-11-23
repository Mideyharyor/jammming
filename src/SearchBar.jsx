import React, { useState, useEffect } from "react";

function SearchBar({item, setItem}){

    const updateitem = ({target}) => {
        setItem(target.value)
    }
    return(
        <div>
            <form>
                <input type="text" value={item} onChange={updateitem} style={{
                    width: '350px', 
                    padding: "12px 16px", 
                    fontSize: 16,
                    border: '2px solid #1DB954',
                    borderRadius: 8,
                    backgroundColor: '#191414',
                    color: '#ffffff',
                    marginRight: '20px' }}/>
                <button type='submit' style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#1DB954',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                    }}>SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar;