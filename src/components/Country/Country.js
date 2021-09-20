import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country-div">
            <h4>Country Name: {props.Name}</h4>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;