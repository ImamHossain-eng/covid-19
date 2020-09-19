import React from 'react';
//import ReactDOM from 'react-dom';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import style from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fData = await fetchData();
        //console.log(data)
        this.setState({ data: fData })
    }

    handleCountryChange = async(country) => {
        const fData = await fetchData(country);
        console.log(fData)
        //console.log(country);
        this.setState({ data: fData, country: country })

    }

    render() {
        const { data } = this.state;
        return (
            <div className = { style.container } >
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart />
                
            </div>
        )
    }
}

export default App;