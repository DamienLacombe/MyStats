import React, {useState, useEffect,useRef} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Filler } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Filler);



function ChartComponent(props) {
    console.log(props);
    const [state, setState] = useState(null);
    const [options, setOptions] = useState()

    useEffect(() => {
        
        /**
         * rank : {
         *    S : 3
         *    A : 2
         *    sh : 3   
         *
         * }
         */
        
        const data = {
            labels: ["k", "c", "o", "n"],
            datasets: [
            {
                label: '# of Votes',
                data: [...Object.values(props.rank.rank)],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    ],
                    hoverOffset: 15
            },
            ],
            
        };

        const options = {
            plugins: {  // 'legend' now within object 'plugins {}'
                legend: {
                  labels: {
                    color: "blue",  // not 'fontColor:' anymore
                    // fontSize: 18  // not 'fontSize:' anymore
                    font: {
                      size: 18 // 'size' now within object 'font {}'
                    }
                  }
                }
              },
        }
        setOptions(options)
        setState(data);
    }, []);
    console.log(state)
    return <>
    {
       state && <Pie data={state} options={options}/>
    }
    </>
}



export default ChartComponent;