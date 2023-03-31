import { useState } from 'react';
import './MainContent.css';

export const MainContent = () => {

    const [searchInputValue, setSearchInputValue] = useState("");
    const [giphs, setGiphs] = useState([]);
 
    const onSearchClick = () => {
        let apiKey = "YLbuSbmTgs3YDTe3B3R178q33N94Wfx9"
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=15&q=${searchInputValue}`)
        .then((response) => response.json())
        .then((data) => setGiphs(data.data))
    }
    
    const onEnterClick = (event) => {
        if (event.key === "Enter") {
            onSearchClick()
        }
    }

    return (
        <div className="main">
            <h1> Search Giphy </h1>
            <input id="search" type="text" value={searchInputValue} onChange={event => setSearchInputValue(event.target.value)} onKeyDown={onEnterClick} />
            <div id="search-result">
                {giphs.map(item => (
                    <div className='giphy' key={item.id}>
                        <img src={item.images.original.url} className="giph" alt="giph"/></div>
                ))}
            </div>
        </div>
    )
}