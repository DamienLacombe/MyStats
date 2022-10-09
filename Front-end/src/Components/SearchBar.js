import React, { useState }from 'react';
import "../css/searchbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getProfil } from '../Utils/ApiAuth';


const SearchBar = (props) => {

    const [pseudo, setPseudo] = useState()   
    
    
    return (
        <form onSubmit={(e) => {
            getProfil(e, props.token, pseudo)
            .then(profil => props.setProfil(profil))
            .then(() => {
                props.charged !== true && props.setChargedProfil(true)
            } )
        }}>
            <input type="text" placeholder='Pseudo...' className='search' onChange={(e) => setPseudo(e.target.value)}/>
            <button type='submit' className='send'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
        </form>
    )
}

export default SearchBar;