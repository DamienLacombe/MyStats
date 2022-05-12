import { useEffect, useState } from "react";
import './css/reset.css';
import { getToken } from "./Utils/ApiAuth";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import ProfilContainer from "./Components/ProfilContainer";

function App() {

    const [token, setToken] = useState()
    const [profil, setProfil] = useState()
    const [chargedProfil, setChargedProfil] = useState(false)
  
    useEffect(() => {
       
        getToken()
        .then(token => {
            setToken(token.access_token)
        })
    }, [])

    
    
    return (

        <div className="App">
            <Navbar></Navbar>
            {
                chargedProfil ? <ProfilContainer profil={profil}></ProfilContainer>: <SearchBar token={token} setProfil={setProfil} setChargedProfil={setChargedProfil}></SearchBar>
            }
            
        </div>
    );
}

export default App;
