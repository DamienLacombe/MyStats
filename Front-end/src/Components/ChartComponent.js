import React, {useState, useEffect} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Filler } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Filler);



function ChartComponent(props) {
    
    const [key, setKey] = useState([...Object.keys(props.rank.rank)]);
    const [values, setValues] = useState([...Object.values(props.rank.rank)])
    const [state, setState] = useState({
      labels: key,
      datasets: [
        {
          label: '# of Votes',
                data: values,
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
            
        });
    const [options, setOptions] = useState({
            plugins: {  // 'legend' now within object 'plugins {}'
                legend: {
                  labels: {
                    color: "White",  // not 'fontColor:' anymore
                    // fontSize: 18  // not 'fontSize:' anymore
                    font: {
                      size: 18, // 'size' now within object 'font {}'
                     
                    }
                  }
                }
              },
        })

    useEffect(() => {
        setKey([...Object.keys(props.rank.rank)])
        setValues([...Object.values(props.rank.rank)])
        setOptions(options)
        
    }, [props])

    useEffect(() => {
        
        setState({
            labels: key,
            datasets: [
              {
                label: '# of Votes',
                      data: values,
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
            ]});
     }, [key]);


    
    return <>
    {
       state && <Pie className='pie' data={state} options={options}/>
    }
    </>
}



export default ChartComponent;