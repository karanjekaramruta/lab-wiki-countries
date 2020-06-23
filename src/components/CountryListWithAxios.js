import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class CountryListWithAxios extends Component {
    constructor(props) {
        super(props);
    }

    state={
        countries:[],
        error:null
    }

    componentDidMount(){
        debugger
        axios.get('https://countries.tech-savvy.tech/countries')
            .then(response=>{
                this.setState({
                    countries:response.data
                })
            })
            .catch(error=>{
                this.setState(error);
            })
    }
    
    render() {
        return (
            <div className="list-group">
            {this.state.countries.map((country, index) => (
              <Link
                to={`/countries/${country.cca3}`}
                className="list-group-item list-group-item-action"
                key={country.cca3}
              >
                <img
                  src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                  alt=""
                />
                {country.name.common}
              </Link>
            ))}
          </div>
        );
    }
}

export default CountryListWithAxios;