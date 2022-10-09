import { useEffect, useState } from "react";
import './css/reset.css';
import { getToken } from "./Utils/ApiAuth";
import SearchBar from "./Components/SearchBar";
import ProfilContainer from "./Components/ProfilContainer";
import { getBestScores } from './Utils/ApiAuth';
import { sortingStats } from "./Utils/CreateStats";
import { calculateFinalStats } from "./Utils/CreateStats";
import MapContainer from "./Components/MapContainer";
import { setTextAnimation } from "./Utils/Anim";

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
            .then(bestScores => {
                setScores(bestScores)
            })
        if (chargedProfil === true) {
        
            document.querySelector(".loader").classList.add("active")   
            setTextAnimation(0.1,3,2,'ease-in-out','#ffffff',true);          
        }  
    }, [profil, chargedProfil])

    useEffect(() => {
        Array.isArray(scores) && setTotalStats(sortingStats(scores))
        Array.isArray(scores) && setChargedMaps(true)
    }, [scores])

    useEffect(() => {
        totalStats !== undefined && setFinalStats(calculateFinalStats(totalStats))
    }, [totalStats])

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loader").classList.remove("active")
        }, 1000) 
    }, [finalStats])


    return (

        <div className="App">
            { 
            <div className="loader">
                    <svg width="545.041" height="175.68" viewBox="0 0 545.041 175.68" xmlns="http://www.w3.org/2000/svg">
                        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none" style={{stroke: "#000",strokeWidth:"0.25mm",fill:"none"}}>
                            <path className="path"d="M 19.98 147.42 L 0 147.42 L 2.52 1.62 L 30.06 1.62 L 50.76 102.6 L 72.36 1.62 L 99 1.62 L 101.7 147.42 L 81.9 147.42 L 79.74 46.08 L 59.04 147.42 L 43.02 147.42 L 21.96 45.72 L 19.98 147.42 Z" id="0" vectorEffect="non-scaling-stroke"/>
                            <path className="path"d="M 127.08 175.68 L 122.4 175.68 L 122.4 158.04 A 92.12 92.12 0 0 0 126.109 157.97 Q 128.023 157.893 129.661 157.73 A 37.574 37.574 0 0 0 132.66 157.32 A 17.996 17.996 0 0 0 134.821 156.798 Q 135.906 156.458 136.76 156.002 A 6.956 6.956 0 0 0 138.42 154.8 A 5.889 5.889 0 0 0 139.945 152.072 Q 140.186 151.157 140.216 150.073 A 11.292 11.292 0 0 0 140.22 149.76 Q 140.22 147.42 139.05 142.38 Q 137.88 137.34 136.44 131.4 L 113.58 43.38 L 137.34 43.38 L 150.84 111.96 L 162.54 43.38 L 186.12 43.38 L 161.82 151.56 A 41.741 41.741 0 0 1 159.955 157.889 Q 158.669 161.195 156.885 163.77 A 22.306 22.306 0 0 1 155.16 165.96 Q 150.48 171.18 143.46 173.43 A 44.879 44.879 0 0 1 135.919 175.109 Q 132.312 175.609 128.25 175.672 A 76.058 76.058 0 0 1 127.08 175.68 Z" id="1" vectorEffect="non-scaling-stroke"/>
                            <path className="path"d="M 195.48 104.94 L 218.34 100.44 A 86.08 86.08 0 0 0 218.913 107.464 Q 219.373 111.135 220.148 114.343 A 51.015 51.015 0 0 0 220.41 115.38 A 29.539 29.539 0 0 0 221.908 119.739 Q 222.917 122.03 224.25 123.785 A 15.509 15.509 0 0 0 225.63 125.37 A 11.787 11.787 0 0 0 232.324 128.688 A 16.582 16.582 0 0 0 234.9 128.88 Q 239.015 128.88 241.605 127.32 A 8.041 8.041 0 0 0 244.08 125.01 A 14.456 14.456 0 0 0 246.291 119.883 Q 246.746 117.881 246.778 115.554 A 25.73 25.73 0 0 0 246.78 115.2 Q 246.78 106.802 243.432 101.054 A 20.618 20.618 0 0 0 242.46 99.54 Q 238.414 93.809 231.842 88.077 A 93.649 93.649 0 0 0 230.94 87.3 L 212.58 71.1 A 57.199 57.199 0 0 1 203.081 60.736 A 51.136 51.136 0 0 1 200.25 56.25 Q 196.007 48.68 195.686 37.804 A 61.114 61.114 0 0 1 195.66 36 A 47.472 47.472 0 0 1 196.798 25.284 Q 198.625 17.396 203.386 11.814 A 29.253 29.253 0 0 1 205.74 9.36 Q 215.82 0 233.28 0 A 55.388 55.388 0 0 1 240.494 0.443 Q 244.176 0.928 247.283 1.942 A 28.672 28.672 0 0 1 250.38 3.15 A 28.919 28.919 0 0 1 257.519 7.748 A 25.588 25.588 0 0 1 261.27 11.88 A 38.952 38.952 0 0 1 266.911 23.251 A 44.537 44.537 0 0 1 267.3 24.57 A 73.781 73.781 0 0 1 269.651 37.511 A 83.013 83.013 0 0 1 269.82 39.6 L 247.14 43.56 A 91.252 91.252 0 0 0 246.601 37.272 Q 246.213 34.105 245.61 31.32 A 22.402 22.402 0 0 0 244.479 27.599 Q 243.615 25.48 242.354 23.874 A 12.805 12.805 0 0 0 241.47 22.86 Q 238.847 20.158 234.048 19.842 A 19.928 19.928 0 0 0 232.74 19.8 A 14.525 14.525 0 0 0 228.986 20.258 A 10.034 10.034 0 0 0 223.65 23.67 A 13.896 13.896 0 0 0 220.698 30.528 A 18.731 18.731 0 0 0 220.5 33.3 A 29.305 29.305 0 0 0 220.93 38.468 Q 221.647 42.469 223.56 45.45 A 36.82 36.82 0 0 0 226.754 49.676 Q 228.469 51.652 230.625 53.673 A 69.44 69.44 0 0 0 232.38 55.26 L 250.56 71.28 Q 259.56 78.84 265.95 89.01 A 40.823 40.823 0 0 1 271.441 103.375 A 55.479 55.479 0 0 1 272.34 113.58 A 40.57 40.57 0 0 1 271.045 124.013 A 34.093 34.093 0 0 1 267.75 132.12 Q 263.16 140.22 254.97 144.81 A 35.527 35.527 0 0 1 243.019 148.858 A 46.387 46.387 0 0 1 235.8 149.4 A 55.763 55.763 0 0 1 226.194 148.618 Q 219.215 147.397 213.84 144.27 Q 205.02 139.14 200.52 129.24 Q 196.02 119.34 195.48 104.94 Z" id="2" vectorEffect="non-scaling-stroke"/>
                            <path className="path"d="M 290.52 121.5 L 290.52 59.58 L 280.08 59.58 L 280.08 43.38 L 290.52 43.38 L 290.52 12.24 L 315.18 12.24 L 315.18 43.38 L 331.02 43.38 L 331.02 59.58 L 315.18 59.58 L 315.18 119.34 A 19.673 19.673 0 0 0 315.345 121.987 Q 315.802 125.338 317.52 126.99 Q 319.401 128.799 322.793 129.154 A 16.804 16.804 0 0 0 324.54 129.24 Q 326.52 129.24 328.41 129.06 Q 330.3 128.88 332.1 128.7 L 332.1 147.42 A 885.192 885.192 0 0 1 329.233 147.753 Q 327.759 147.921 326.109 148.106 A 1586.965 1586.965 0 0 1 324.99 148.23 A 74.487 74.487 0 0 1 318.799 148.649 A 86.485 86.485 0 0 1 316.44 148.68 Q 309.943 148.68 305.268 147.285 A 20.86 20.86 0 0 1 300.87 145.44 Q 295.2 142.2 292.86 136.08 A 33.503 33.503 0 0 1 291.142 129.603 Q 290.637 126.564 290.542 123.114 A 58.767 58.767 0 0 1 290.52 121.5 Z" id="3" vectorEffect="non-scaling-stroke"/>
                            <path className="path"d="M 385.74 82.8 L 385.74 73.8 Q 385.74 70.399 385.38 67.82 A 24.948 24.948 0 0 0 385.11 66.24 A 11.832 11.832 0 0 0 384.518 64.227 Q 384.069 63.107 383.411 62.267 A 6.433 6.433 0 0 0 382.77 61.56 Q 381.481 60.339 379.119 60.039 A 13.161 13.161 0 0 0 377.46 59.94 Q 374.854 59.94 373.096 60.985 A 6.157 6.157 0 0 0 372.51 61.38 A 7.379 7.379 0 0 0 370.317 64.126 A 9.705 9.705 0 0 0 369.81 65.43 Q 369.025 67.959 368.832 71.247 A 34.556 34.556 0 0 0 368.82 71.46 L 368.46 77.76 L 345.24 76.86 A 63.606 63.606 0 0 1 346.251 67.006 Q 347.211 61.914 349.05 57.884 A 26.322 26.322 0 0 1 354.15 50.31 A 26.019 26.019 0 0 1 364.504 43.965 Q 368.625 42.553 373.669 42.045 A 59.488 59.488 0 0 1 379.62 41.76 A 44.752 44.752 0 0 1 388.062 42.502 Q 392.785 43.411 396.406 45.433 A 20.803 20.803 0 0 1 402.39 50.4 Q 408.783 58.169 409.428 70.886 A 57.575 57.575 0 0 1 409.5 73.8 L 409.5 121.86 Q 409.5 127.62 409.77 132.3 Q 410.04 136.98 410.49 140.76 A 1449.684 1449.684 0 0 0 410.867 143.896 Q 411.097 145.8 411.3 147.42 L 389.34 147.42 A 263.432 263.432 0 0 0 388.816 144.081 Q 388.538 142.379 388.212 140.502 A 441.911 441.911 0 0 0 387.99 139.23 Q 387.18 134.64 386.82 132.48 A 25.935 25.935 0 0 1 381.617 142.112 A 31.441 31.441 0 0 1 379.98 143.91 Q 374.94 149.04 366.3 149.04 A 22.316 22.316 0 0 1 359.976 148.178 A 18.446 18.446 0 0 1 354.24 145.35 Q 349.2 141.66 346.5 135.99 Q 343.8 130.32 343.8 124.2 A 43.543 43.543 0 0 1 344.388 116.841 Q 345.255 111.788 347.4 107.82 Q 351 101.16 356.94 96.66 A 64.196 64.196 0 0 1 366.538 90.682 A 75.481 75.481 0 0 1 370.44 88.83 Q 378 85.5 385.74 82.8 Z M 385.74 124.02 L 385.74 95.04 Q 381.78 97.38 378.27 99.72 A 36.305 36.305 0 0 0 373.869 103.151 A 31.419 31.419 0 0 0 372.15 104.85 A 20.938 20.938 0 0 0 369.076 109.045 A 18.697 18.697 0 0 0 368.19 110.88 Q 366.84 114.12 366.84 118.44 Q 366.84 122.492 367.953 125.342 A 11.126 11.126 0 0 0 369.09 127.53 Q 371.236 130.706 374.936 130.853 A 9.144 9.144 0 0 0 375.3 130.86 Q 377.64 130.86 379.71 129.69 Q 381.78 128.52 383.4 126.9 Q 384.459 125.842 385.133 124.937 A 9.114 9.114 0 0 0 385.74 124.02 Z" id="4" vectorEffect="non-scaling-stroke"/>
                            <path className="path"d="M 430.74 121.5 L 430.74 59.58 L 420.3 59.58 L 420.3 43.38 L 430.74 43.38 L 430.74 12.24 L 455.4 12.24 L 455.4 43.38 L 471.24 43.38 L 471.24 59.58 L 455.4 59.58 L 455.4 119.34 A 19.673 19.673 0 0 0 455.565 121.987 Q 456.022 125.338 457.74 126.99 Q 459.621 128.799 463.013 129.154 A 16.804 16.804 0 0 0 464.76 129.24 Q 466.74 129.24 468.63 129.06 Q 470.52 128.88 472.32 128.7 L 472.32 147.42 A 885.192 885.192 0 0 1 469.453 147.753 Q 467.979 147.921 466.329 148.106 A 1586.965 1586.965 0 0 1 465.21 148.23 A 74.487 74.487 0 0 1 459.019 148.649 A 86.485 86.485 0 0 1 456.66 148.68 Q 450.163 148.68 445.488 147.285 A 20.86 20.86 0 0 1 441.09 145.44 Q 435.42 142.2 433.08 136.08 A 33.503 33.503 0 0 1 431.362 129.603 Q 430.857 126.564 430.762 123.114 A 58.767 58.767 0 0 1 430.74 121.5 Z" id="5" vectorEffect="non-scaling-stroke"/>
                            <path className="path"d="M 480.96 121.5 L 499.14 114.48 Q 501.3 122.94 504.9 127.44 A 11.953 11.953 0 0 0 508.894 130.744 Q 511.253 131.922 514.167 131.94 A 14.684 14.684 0 0 0 514.26 131.94 Q 518.58 131.94 520.74 129.78 A 7.145 7.145 0 0 0 522.645 126.248 A 10.716 10.716 0 0 0 522.9 123.84 Q 522.9 119.52 520.29 116.01 A 27.873 27.873 0 0 0 518.415 113.776 Q 516.42 111.613 513.356 108.954 A 114.276 114.276 0 0 0 511.38 107.28 L 498.78 96.66 Q 491.94 90.72 487.71 84.51 Q 483.48 78.3 483.48 68.94 A 30.888 30.888 0 0 1 484.268 61.801 A 23.557 23.557 0 0 1 487.35 54.45 Q 491.22 48.42 497.97 45.09 A 32.537 32.537 0 0 1 509.949 41.878 A 39.172 39.172 0 0 1 513 41.76 Q 525.6 41.76 533.25 49.23 Q 540.9 56.7 543.06 68.76 L 527.04 75.6 Q 526.14 71.28 524.43 67.59 A 19.405 19.405 0 0 0 522.228 63.912 A 15.984 15.984 0 0 0 520.02 61.56 Q 517.32 59.22 513.72 59.22 A 9.9 9.9 0 0 0 511.1 59.549 A 7.319 7.319 0 0 0 507.69 61.56 A 7.983 7.983 0 0 0 505.485 66.51 A 10.724 10.724 0 0 0 505.44 67.5 Q 505.44 70.13 507.368 72.893 A 16.486 16.486 0 0 0 508.05 73.8 A 37.953 37.953 0 0 0 510.217 76.245 Q 511.312 77.387 512.637 78.621 A 88.141 88.141 0 0 0 515.52 81.18 L 528.3 92.7 Q 532.44 96.3 536.22 100.44 Q 540 104.58 542.52 109.71 A 24.382 24.382 0 0 1 544.742 117.102 A 31.438 31.438 0 0 1 545.04 121.5 Q 545.04 130.5 540.99 136.62 Q 536.94 142.74 530.01 145.89 A 35.395 35.395 0 0 1 518.375 148.879 A 42.842 42.842 0 0 1 514.62 149.04 A 40.334 40.334 0 0 1 504.892 147.926 A 29.397 29.397 0 0 1 493.02 142.02 A 33.048 33.048 0 0 1 485.04 132.073 Q 482.848 127.99 481.368 122.958 A 59.563 59.563 0 0 1 480.96 121.5 Z" id="6" vectorEffect="non-scaling-stroke"/>
                        </g>
                    </svg>
                </div>
            }
            {
                chargedProfil ? <ProfilContainer profil={profil} chargedProfil={chargedProfil} scores={scores} setChargedProfil={setChargedProfil} finalStats={finalStats} token={token} setProfil={setProfil}></ProfilContainer> : <SearchBar token={token} setProfil={setProfil} setChargedProfil={setChargedProfil}></SearchBar>
            }
            {
                chargedMaps && <MapContainer maps={scores}/>
            }
        </div>
    );
}

export default App;
