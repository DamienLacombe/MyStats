import { useEffect, useState } from "react";
import './css/reset.css';
import { getToken } from "./Utils/ApiAuth";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import ProfilContainer from "./Components/ProfilContainer";
import { getBestScores } from './Utils/ApiAuth';
import { sortingStats } from "./Utils/CreateStats";
import { calculateFinalStats } from "./Utils/CreateStats";
import MapContainer from "./Components/MapContainer";

function App() {

    const [chargedProfil, setChargedProfil] = useState(false);
    const [chargedMaps, setChargedMaps] = useState(false)
    const [token, setToken] = useState();
    const [profil, setProfil] = useState();
    const [scores, setScores] = useState();
    const [finalStats, setFinalStats] = useState();
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
        Array.isArray(scores) && setChargedMaps(true)
    }, [scores])

    useEffect(() => {
        
        totalStats !== undefined && setFinalStats(calculateFinalStats(totalStats))
    }, [totalStats])

    return (

        <div className="App">
            {
                chargedProfil ? <ProfilContainer profil={profil} scores={scores} finalStats={finalStats} token={token} setProfil={setProfil}></ProfilContainer> : <SearchBar token={token} setProfil={setProfil} setChargedProfil={setChargedProfil}></SearchBar>
            }
            {
                chargedMaps && <MapContainer maps={scores}/>
            }
        </div>
    );
}

export default App;
