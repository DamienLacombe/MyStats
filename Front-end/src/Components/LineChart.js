import React, { useEffect, useState } from 'react';
import { triCreator } from '../Utils/CreateStats';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({creator}) {
  
  const [data, setData] = useState()
  const [options, setOptions] = useState()
  const [arrCreator, setArrCreator] = useState(undefined)
  const [labels, setLabels] = useState()
  const [direction, setDirection] = useState()
   

  window.addEventListener("resize", () => {
    if (window.innerWidth < 650) {
      setDirection("y")
    } else {
      setDirection("x")
    }
  })
  useEffect(() => {

    setArrCreator(triCreator(Object.entries(creator)))
    if (window.innerWidth < 650) {
      setDirection("y")
    } else {
      setDirection("x")
    }
    
  }, [])

  useEffect(() => {
    setArrCreator(triCreator(Object.entries(creator)))
  }, [creator])

  useEffect(() => {
            setOptions({
            indexAxis: direction,  
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                  ticks: { 
                    color: '#08111a', 
                    beginAtZero: true,
                    font: {
                      size: 12,
                      weight:700  
                    }
                  }  
                },
                x: {
                  ticks: { 
                    color: '#08111a', 
                    beginAtZero: true, 
                    font: {
                      size: 13,
                      weight:600 
                    }
                  }
                }, 
            }, 
            plugins: {
                legend: {
                    position: 'bottom',
                    display: false,
                    },
                    title: {
                        position: 'top',
                        display: true,
                        text: 'Mappeur dans le top 100',
                        color: "white",
                        font: {
                            size: 18
                        }
                    },
                    
            },
        })
        
        setData({
            labels : labels,
           
            datasets: [
              {
                label: 'Nombre de maps dans le top 100',
                data: arrCreator?.map(nbr => nbr[1]) ,
                backgroundColor: '#F9D9D7',
              },
            
            ],
        })
  },[labels, direction])

  useEffect(() => {


        if (arrCreator !== undefined) {

            let arrlabels = []
           
            arrCreator.forEach(creator => {
                arrlabels.push(creator[0])
            }) 
            setLabels(arrlabels) 
        }
  }, [arrCreator])

  return <> { 
    <div className='line-chart'>
      {
        data && <Bar className="bar-chart" options={options} data={data} />
      }
    </div>
  } </> 
}
