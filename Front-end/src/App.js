import { useEffect, useState } from "react";
import './css/reset.css';
import { getToken } from "./Utils/ApiAuth";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {

    const [token, setToken] = useState()
    const [profil, setProfil] = useState()
  
    useEffect(() => {
       
        getToken()
        .then(token => {
            setToken(token.access_token)
        })
    }, [])
    
    return (

        <div className="App">
            <Navbar></Navbar>
            <SearchBar token={token} setProfil={setProfil}></SearchBar>
        </div>
    );
}

export default App;
