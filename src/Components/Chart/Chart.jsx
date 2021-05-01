import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart = () => {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData.reverse())
        }  

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line 
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toDateString()),
                    datasets: [{
                        data: dailyData.map(({ positive }) => positive),
                        label: 'Positive Cases',
                        borderColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                       
                    }, {
                        data: dailyData.map(({ death }) => death),
                        label: 'Death Cases',
                        borderColor: 'black',
                        fill: true,
                        
                    }],
                }}
                />  
            ) : null   
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;

