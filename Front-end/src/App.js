import { useEffect, useState } from "react";
import './css/reset.css';
import { getToken } from "./Utils/ApiAuth";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import ProfilContainer from "./Components/ProfilContainer";
import { getBestScores } from './Utils/ApiAuth';
import { sortingStats } from "./Utils/CreateStats";
import { calculateFinalStats } from "./Utils/CreateStats";

function App() {
    
    const [chargedProfil, setChargedProfil] = useState(false);
    const [token, setToken] = useState();
    const [profil, setProfil] = useState();
    const [scores, setScores] = useState();
    const [totalStats, setTotalStats] = useState();
   
  
    useEffect(() => {
       
        getToken()
        .then(token => {
            setToken(token.access_token)
        })
    }, [])

    useEffect(() => {

        getBestScores(token, profil?.id)
        .then(bestScores => setScores(bestScores))
    }, [profil])

    useEffect(() => {
        
        Array.isArray(scores) && setTotalStats(sortingStats(scores)) 
    }, [scores])

    useEffect(() => {
        calculateFinalStats(totalStats)
    }, [totalStats])

    return (

        <div className="App">
            <Navbar></Navbar>
            {
                chargedProfil ? <ProfilContainer profil={profil} scores={scores}></ProfilContainer>: <SearchBar token={token} setProfil={setProfil} setChargedProfil={setChargedProfil}></SearchBar>
            }
            
        </div>
    );
}

export default App;
