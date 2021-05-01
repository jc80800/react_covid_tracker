import axios from 'axios';

const URL = 'https://api.covidtracking.com/v1/us/daily.json';

export const fetchData = async () => {
    try {
        const {data : {0 : {positive, death, dateChecked, totalTestResults} }} = await axios.get(URL);

        return {positive, death, dateChecked, totalTestResults};

    } catch (error){
        return error;
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(URL);

        const modifiedData = data.map((dailyData) => ({
            positive: dailyData.positive,
            death: dailyData.death,
            date: dailyData.dateChecked
        }))

        return (modifiedData);
    } catch (error) {
        return error;
    }
}