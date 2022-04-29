import { useEffect, useState } from "react";
import './css/reset.css';
import { getToken } from "./Utils/ApiAuth";
import Navbar from "./Components/Navbar";

function App() {

    const [token, setToken] = useState()
  
    useEffect(() => {
        if(localStorage.length === 0) {
            getToken();
        }
        setToken(localStorage.getItem("token"))
    }, [])
    
    return (

        <div className="App">
            <Navbar></Navbar>
        </div>
    );
}

export default App;
