import React from 'react'
import { Accordion } from 'semantic-ui-react'
import './Degrees.css'




const DegreesAccordions = ({whichDegree}) => {
    //Render the accordion component
    return (
        //Render a div to contain the accordion
        <div className="degreesList">
            {/* Render an accordion component */}
            <Accordion>
                {/* Need to map/display each degree object */}
                {whichDegree.map((degree) => [
                    //Should have a unique identifier (key  |  ex: key={degree.degreeName})
                    //Render an accordion panel for each degree
                    <Accordion.Accordion className="degreesListItem"
                        panels={[
                            {
                                //Set the key and title
                                key: degree.degreeName,
                                //Essentially an if statement
                                //If degree title exists, use it; it not, fallback to degreeName
                                title: (degree.title ? (degree.title + " (" + ((degree.degreeName).toUpperCase()) + ")") : degree.degreeName),
                                content: {
                                    content: (
                                        <div class="degrees-content">
                                            {/* Essentially an if statement */}
                                            {/* If degree description is empty/does not exist, does not use it */}
                                            <h3>Description</h3>
                                            {degree.description && <p>{degree.description}</p>}
                                            
                                            {/* Essentially an if statement */}
                                            {/* If degree concentrations is empty/does not exist, does not use it */}
                                            {degree.concentrations && (
                                                <div>
                                                    <h3>Concentrations</h3>
                                                    <ui>
                                                        {/* Need to map/display each of concentration */}
                                                        {degree.concentrations.map((concentration) => [
                                                            <li key={concentration}>{concentration}</li>
                                                        ])}
                                                    </ui>
                                                </div>
                                            )}

                                            {/* Essentially an if statement */}
                                            {/* If degree availableCertificates is empty/does not exist, does not use it */}
                                            {degree.availableCertificates && (
                                                <div>
                                                    <h3>Available Certificates</h3>
                                                    <ui>
                                                        {/* Need to map/display each of available certificate */}
                                                        {degree.availableCertificates.map((certificate) => [
                                                            <li key={certificate}>{certificate}</li>
                                                        ])}
                                                    </ui>
                                                </div>
                                            )}
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

export default DegreesAccordions