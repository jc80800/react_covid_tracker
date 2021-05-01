import React, { Component } from 'react';

import { Cards, Chart } from './Components';
import styles from './App.module.css';
import { fetchData } from './api'
import image from './images/covid_logo.jpg'

class App extends Component { 

  state = {
    data: []
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData});
  }

  render(){
    const { data } = this.state;

    return(
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data}></Cards>
        <Chart></Chart>
      </div>
    )
  }
}

export default App;
