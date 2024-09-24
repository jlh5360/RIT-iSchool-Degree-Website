//Import necessary dependencies
import React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';




//Column can just be hardcoded
//Define the columns for the data grid
const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'employer',
        headerName: 'Employer',
        width: 300,
        editable: false,
    },
    {
        field: 'degree',
        headerName: 'Degree',
        width: 125,
        editable: false,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 150,
        editable: false,
    },
    {
        field: 'term',
        headerName: 'Term',
        type: 'number',
        width: 125,
    },
];

//Define the CoopTableDataGrid component
export default function CoopTableDataGrid({coopTableHeader, coopTable}) {
    //Define state variables using useState hook
    const [loaded, setLoaded] = React.useState(false);
    const [rows, setRows] = useState([]);
    
    //Use useEffect hook to populate rows when the component mounts
    React.useEffect(() => {
        //Define rows by tripping through the employment data
        //for loop to push each row into an empty rows array
        //populate the data into the empty rows array
        let newRows = [];   //Create a new array to hold the rows

        //Iterate over each coopInfoSet in the coopTable
        for (const coopInfoSet of coopTable) {
            //Push a new row object into the newRows array
            newRows.push({
                id: (newRows.length + 1),
                employer: (coopInfoSet.employer),
                degree: (coopInfoSet.degree),
                city: (coopInfoSet.city),
                term: (coopInfoSet.term),
            });
        }

        setRows(newRows);   //Update the state with the newRows array
        setLoaded(true);   //Set loaded to true once data is loaded
    }, []);
    
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    //Render loading indicator if data is not yet loaded
    if (!loaded) return (
        <h4 class="loading">...Loading Co-op Table...</h4>
    );

    //Render the CoopTableDataGrid component with the populated rows
    return (
        <div class="data-grid">
            <h3 class="data-grid-header">{coopTableHeader}</h3>
            <Box sx={{ height: 400, width: '100%' }}  key={coopTableHeader}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 100,
                            },
                        },
                    }}
                    pageSizeOptions={[100]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
}