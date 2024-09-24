//Import necessary dependencies
import React, { useState } from "react";
import './People.css';
import getData from "../utils/getData";




//Define the People component
const People=() => {
    //state...
    //Define state variables
    const [loaded, setLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();

    //Go get data...
    //Fetch data from API using useEffect hook
    React.useEffect(() => {
        //The page was just rendered, now get data!
        //I am going to use the getData method in utils
        getData("people/")
            .then((json) => {
                console.log(json);
                setPepObj(json);
                setLoaded(true);
            })
    }, []);
    
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    //Render content based on loading state
    if (!loaded) return (
        <h1>...Loading People...</h1>
    );
    
    //This return is for the page AFTER we load the data!
    return (
        <>
            <h1>{pepObj.title}</h1>
            <h3>{pepObj.subTitle}</h3>
            <h3>Faculty</h3>
            <div className="peopleList">
                {pepObj.faculty.map((people) => [
                    //Should have a unique identifier (key  |  ex: key={people.email})
                    <div key={people.email} className="peopleListItem">
                        <h3>{people.name}</h3>
                        <img src={people.imagePath} alt="person"></img>
                    </div>
                ])}
            </div>

            <h3>Staff</h3>
            <div className="peopleList">
                {pepObj.staff.map((people) => [
                    //Should have a unique identifier (key  |  ex: key={people.email})
                    <div key={people.email} className="peopleListItem">
                        <h3>{people.name}</h3>
                        <img src={people.imagePath} alt="person"></img>
                    </div>
                ])}
            </div>
        </>
    );
}

export default People;