import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountryListWithAxios from './components/CountryListWithAxios';
import CountryDetailWithAxios from './components/CountryDetailWithAxios';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row text-left">
          <div className="col-5 list-container">
            <CountryListWithAxios />
          </div>
          <div className="col-7">
            <Route exact path="/countries/:id" component={CountryDetailWithAxios} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
