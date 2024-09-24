//Import necessary dependencies
import React from 'react';
import DegreesAccordions from './DegreesAccordions';
import { useState, useEffect } from 'react'
import getData from '../utils/getData'
import './Degrees.css'




//Define the Degrees component
const Degrees = () => {
    //state
    //Define state variables using useState hook
    const [loaded, setLoaded] = useState(false);
    const [degObj, setDegObj] = useState();

    //useEffect  |  Go get data...
    //Fetch data using the useEffect hook when the component mounts
    React.useEffect(() => {
        //The page was just rendered, now get data!
        //I am going to use the getData method in utils
        getData("degrees/")
            .then((json) => {
                console.log(json);
                setDegObj(json);
                setLoaded(true);
            })
    }, []);

    //If not loaded return
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    //Render loading indicator if data is not yet loaded
    if (!loaded) return (
        <h1 className="loading">...Loading Degrees...</h1>
    );
    
    //Render the Degrees component with fetched data
    return (
        <div id="degrees">
            <h1 id="degrees-header">Degrees</h1>

            <div id="undergraduate-degrees">
                <h2>Undergraduate Degrees</h2>
                <DegreesAccordions whichDegree={degObj.undergraduate}></DegreesAccordions>
            </div>

            <br></br>

            <div id="graduate-degrees">
                <h2>Graduate Degrees</h2>
                <DegreesAccordions whichDegree={degObj.graduate}></DegreesAccordions>
            </div>
        </div>
    );
};

export default Degrees;
