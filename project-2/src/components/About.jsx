//Import necessary dependencies and components
import React, { useState } from "react";
import getData from "../utils/getData";




//Define the functional component About
const About=() => {
    //state
    //const [var, setVar] = useState(init);
    const [loaded, setLoaded] = React.useState(false);   //Indicates if data is loaded
    const [aboutObj, setAboutObj] = useState();    //Stores the fetched data
  
    //Go get data!
    React.useEffect(() => {
        //The page was just rendered, now get data!
        //I am going to use the getData method in utils
        //Fetch data from the API using the getData function
        getData("about/")
            .then((json) => {
                console.log(json);
                setAboutObj(json);   //Update the state with the fetched data
                setLoaded(true);   //Set loaded to true once data is fetched
            })
    }, []);
    
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    //Render loading indicator if data is not yet loaded
    if (!loaded) return (
        <h1 className="loading">...Loading About...</h1>
    );
    
    //This return is for the page AFTER we load the data!
    //Render the About component with the fetched data
    return (
        <div id="about">            
            <div className="About">
                <h2>{aboutObj.title}</h2>
                <h4>{aboutObj.description}</h4>

                <br></br>
                
                <div className="aboutQuote">
                    <p className="quote">"{aboutObj.quote}"</p>
                    <p>--{aboutObj.quoteAuthor}</p>
                </div>
            </div>
        </div>
    );
}

//Export the About component
export default About;