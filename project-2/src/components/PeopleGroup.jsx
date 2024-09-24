//Import necessary dependencies
import React from "react";
import PeopleModal from "./PeopleModal";




//Define the PeopleGroup component
const PeopleGroup = ({title, whichGroup}) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="peopleList">
                {whichGroup.map((people) => [
                    //Should have a unique identifier (key  |  ex: key={people.email})
                    <div key={people.username} className="peopleListItem">
                        <img src={people.imagePath} alt="person"></img>
                        <PeopleModal {...people}></PeopleModal>
                    </div>
                ])}
            </div>
        </>
    );
}

export default PeopleGroup;