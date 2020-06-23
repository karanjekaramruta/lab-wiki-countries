import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CountryDetailWithAxios extends Component {

    constructor(props) {
        debugger
        super(props);
        
    }
    
    state={
        countryMatch:null,
        countries:[],
        error:null
    }

    componentDidMount(){
        debugger
        axios.get("https://countries.tech-savvy.tech/countries")
            .then(response=>{
                this.setState({
                    countries:response.data
                })
            })
            .catch(error=>{
                this.setState(error)
            })
    }

    getCountryNameUsingCode = (border) => {
        var country = this.state.countries.find((country) => border === country.cca3);
        return country.name.common;
    };

    render() {
        
        
        if(this.state.countries.length === 0) {
            return (<h1>Loading...</h1>)
        }
        
        else {
            // use find logic here
            
            var countryMatch = this.state.countries.find(
                (country) => this.props.match.params.id === country.cca3
            );
            return (
                <div>
                    <h1>{countryMatch.name.common}</h1>
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td style={{ width: '30%' }}>Capital</td>
                          {countryMatch.capital.map((cap) => (
                            <td key={countryMatch.cca3}>{cap}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Area</td>
                          <td>
                            {countryMatch.area} km <sup>2</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>Borders</td>
                          <td>
                            <ul>
                              {countryMatch.borders.map((borderCountryCode) => (
                                <li key={borderCountryCode}>
                                  <Link to={`/countries/${borderCountryCode}`}> {this.getCountryNameUsingCode(borderCountryCode)}</Link>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
            )
        }
    }
}

export default CountryDetailWithAxios;