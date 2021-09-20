import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,capital,population,region} = props.country;
    // console.log(props.country)
    return (
        <div className="country-div">
            <h4>{name}</h4>
            <img src={flag} alt="Country Flag"/>
            <p>Capital: {capital} Population: {population}</p>
            <p>Region: {region}</p>
        </div>
        
    );
};

export default Country;