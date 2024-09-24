//Import necessary dependencies
import React from 'react'
import {
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Card,
} from 'semantic-ui-react'
import EmploymentTableDataGrid from './EmploymentTableDataGrid'
import CoopTableDataGrid from './CoopTableDataGrid'
import './Employment.css'




//Define the EmploymentGeneral component
const EmploymentGeneral = ({whichInfo}) => {
    //Render the accordion component
    return (
        //Render a div to contain the accordion
        <div className="employment-div">

            {/* Essentially an if statement */}
            {/* If content is empty/does not exist, does not use it */}
            {whichInfo.content && (
                <div class="introduction-div">
                    <h2>{whichInfo.title}</h2>

                    <div class="introduction-content-outter">
                        {whichInfo.content.map((info) => [
                                <div class="introduction-content-inner">
                                    <h3 class="introduction-header">{info.title}</h3>
                                    <p class="introduction-description">{info.description}</p>
                                </div>
                        ])}
                    </div>
                </div>
            )}
            
            {/* Essentially an if statement */}
            {/* If statistic is empty/does not exist, does not use it */}
            {whichInfo.statistics && (
                <div id="degreeStatistics-div">
                    <h2>{whichInfo.title}</h2>

                    <CardGroup class="degreeStatistics-cards">
                        {whichInfo.statistics.map((info) => [
                            <Card class="degreeStatistics-card">
                                <CardContent class="degreeStatistics-content">
                                    <CardHeader class="degreeStatistics-header">{info.value}</CardHeader>
                                    <CardDescription class="degreeStatistics-description">{info.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ])}
                    </CardGroup>
                </div>
            )}
            
            {/* Essentially an if statement */}
            {/* If employers is empty/does not exist, does not use it */}
            {whichInfo.employerNames && (
                <div class="employers-careers-outter">
                    <h2 class="employers-careers-header">{whichInfo.title}</h2>
                    
                    <div id="employers-div-inner">
                        <CardGroup class="employers-cards">
                            {console.log(whichInfo.employerNames)}
                            {whichInfo.employerNames.map((info) => [
                                <Card class="employers-card">
                                    <CardContent class="employers-content">
                                        <CardHeader class="employers-header">{info}</CardHeader>
                                    </CardContent>
                                </Card>
                            ])}
                        </CardGroup>
                    </div>
                </div>
            )}
            
            {/* Essentially an if statement */}
            {/* If careers is empty/does not exist, does not use it */}
            {whichInfo.careerNames && (
                <div class="employers-careers-outter">
                    <h2 class="employers-careers-header">{whichInfo.title}</h2>
                    
                    <div id="careers-div-inner">
                        <CardGroup class="careers-cards">
                            {whichInfo.careerNames.map((info) => [
                                <Card class="careers-card">
                                    <CardContent class="careers-content">
                                        <CardHeader class="careers-header">{info}</CardHeader>
                                    </CardContent>
                                </Card>
                            ])}
                        </CardGroup>
                    </div>
                </div>
            )}
            
            <div id="data-grid-tables">
                {/* Essentially an if statement */}
                {/* If coopInformation is empty/does not exist, does not use it */}
                {whichInfo.coopInformation && (
                    <div id="coop-table-div">
                        <CoopTableDataGrid coopTableHeader={whichInfo.title} coopTable={whichInfo.coopInformation}></CoopTableDataGrid>
                    </div>
                )}

                {/* Essentially an if statement */}
                {/* If professionalEmploymentInformation is empty/does not exist, does not use it */}
                {whichInfo.professionalEmploymentInformation && (
                    <div id="employment-table-div">
                        <EmploymentTableDataGrid employmentTableHeader={whichInfo.title} employmentTable={whichInfo.professionalEmploymentInformation}></EmploymentTableDataGrid>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmploymentGeneral
