//Import necessary dependencies
import React from 'react';
import { useState, useEffect } from 'react'
import getData from '../utils/getData'
import EmploymentGeneral from './EmploymentGeneral';




//Define the Employment component
const Employment = () => {
    //state
    //Define state variables using useState hook
    const [loaded, setLoaded] = useState(false);
    const [empObj, setEmpObj] = useState();

    //useEffect  |  Go get data...
    //Fetch data using the useEffect hook when the component mounts
    React.useEffect(() => {
        //The page was just rendered, now get data!
        //I am going to use the getData method in utils
        getData("employment/")
            .then((json) => {
                console.log(json);
                setEmpObj(json);
                setLoaded(true);
            })
    }, []);

    //If not loaded return
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    //Render loading indicator if data is not yet loaded
    if (!loaded) return (
        <h1 className="loading">...Loading Employment...</h1>
    );
    
    //Render the Employment component with fetched data
    return (
        <div id="employment">
            <h1 id="employment-header">Employment</h1>

            <div id="introduction-degreeStatistics-div">
                <EmploymentGeneral whichInfo={empObj.introduction}></EmploymentGeneral>
                <br></br>
                <br></br>
                <EmploymentGeneral whichInfo={empObj.degreeStatistics}></EmploymentGeneral>
            </div>

            <br></br>
            <br></br>

            <div class="employers-careers-div">
                <EmploymentGeneral whichInfo={empObj.employers}></EmploymentGeneral>
                <br></br>
                <EmploymentGeneral whichInfo={empObj.careers}></EmploymentGeneral>
            </div>

            <br></br>
            <br></br>

            <div id="data-grid-table-div">
                <EmploymentGeneral whichInfo={empObj.coopTable}></EmploymentGeneral>
                <br></br>
                <EmploymentGeneral whichInfo={empObj.employmentTable}></EmploymentGeneral>
            </div>
        </div>
    );
};

export default Employment;
