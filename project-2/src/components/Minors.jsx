//Import necessary dependencies
import React from 'react';
import { useState, useEffect } from 'react'
import getData from '../utils/getData'
import MinorsAccordions from './MinorsAccordions';
import './Minors.css'




//Define the Minors component
const Minors = () => {
    //state
    //Define state variables
    const [loaded, setLoaded] = useState(false);
    const [minObj, setMinObj] = useState();

    //useEffect  |  Go get data...
    //Fetch data from API using useEffect hook
    React.useEffect(() => {
        //The page was just rendered, now get data!
        //I am going to use the getData method in utils
        getData("minors/")
            .then((json) => {
                console.log(json);
                setMinObj(json);
                setLoaded(true);
            })
    }, []);

    //If not loaded return
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    //Render content based on loading state
    if (!loaded) return (
        <h1 className="loading">...Loading Minors...</h1>
    );
    
    return (
        <div id="minors">
            <h1 id="minor-header">Minors</h1>
            <MinorsAccordions whichMinor={minObj.UgMinors}></MinorsAccordions>
        </div>
    );
};

export default Minors;
