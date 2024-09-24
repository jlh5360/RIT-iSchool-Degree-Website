//Import necessary dependencies
import React from 'react'
import { Accordion } from 'semantic-ui-react'
import Stack from '@mui/material/Stack';
import MinorsModal from './MinorsModal'
import './Minors.css'




//Define the MinorsAccordions component
const MinorsAccordions = ({whichMinor}) => {
    //Render the accordion component
    return (
        //Render a div to contain the accordion
        <div className="minorsList">
            {/* Render an accordion component */}
            <Accordion>
                {/* Need to map/display each minor object */}
                {whichMinor.map((minor) => [
                    //Should have a unique identifier (key  |  ex: key={minor.name})
                    //Render an accordion panel for each minor
                    <Accordion.Accordion className={"minorsListItem"}
                        panels={[
                            {
                                //Set the key and title
                                key: minor.name,
                                title: minor.title,
                                content: {
                                    content: (
                                        <div class="minor-content">
                                            <h3>Description</h3>
                                            <p>{minor.description}</p>

                                            {/* Essentially an if statement */}
                                            {/* If minor note is empty/does not exist, does not use it */}
                                            {minor.note && (
                                                <div class="note-div">
                                                    <h3 class="note-header">Note</h3>
                                                    <p class="note">{minor.note}</p>
                                                </div>
                                            )}

                                            <div class="minor-courses-div">
                                                <h3>Courses</h3>
                                                {/* <div id="minor-courses"> */}
                                                <Stack spacing={2} direction="row">
                                                    {minor.courses.map((course) => [
                                                        <MinorsModal key={course} course={course}></MinorsModal>
                                                    ])}
                                                </Stack>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    )
                                },
                            }
                        ]}
                    >
                    </Accordion.Accordion>
                ])}
            </Accordion>
        </div>
    )
}

export default MinorsAccordions