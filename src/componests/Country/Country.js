import React, { useEffect, useState } from 'react';
import './Country.css'

const Country = () => {

    const [contries, setCountries] = useState([]);
    useEffect(contriy => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    } , [])
    return (
        <div>
            <h1>Counry is a outher file here and 1st pratices here </h1>
            <p>Country Count : {contries.length}</p>

            <div className='countrysContainer'>
                
            {
                contries.map(contrie => <DisplayCountry contrie={contrie}></DisplayCountry>)
            }
            </div>


            {/* {
                contries.map(contrie => <DisplayCountry name={contrie.name} population={contrie.population} capital={contrie.capital}></DisplayCountry>)
            } */}

        </div>
    );
};


function DisplayCountry(porps){

    const {name,capital,population,region,area, flags} = porps.contrie;
    return(
       

            <div className='CountryBox'>
            <h1>Name: {name}</h1>
            <img src={flags.png} alt="" srcset="" />
            <h2>Capital: {capital}</h2>
            <h3>Propulation: {population}</h3>
            <h3>Region: {region}</h3>
            <h3>area: {area}</h3>

        </div>
    
    )
}



export default Country;