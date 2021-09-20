import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Countries = () => {
    const [countries, setCountries ] = useState([])
    useEffect( () =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then (res => res.json())
        .then ( data => setCountries(data))
    } ,[])
    return(
        <div>
            <h1>Total Countries: {countries.length}</h1>
            {
              countries.map(country => <Country Name ={country.name} flag ={country.flag} ></Country> )  
            }
        </div>
    );
};


export default Countries;
