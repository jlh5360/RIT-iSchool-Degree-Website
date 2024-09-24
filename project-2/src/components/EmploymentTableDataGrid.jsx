//Import necessary dependencies
import React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';




//Column can just be hardcoded
//Define columns for the data grid
const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'employer',
        headerName: 'Employer',
        width: 270,
        editable: false,
    },
    {
        field: 'degree',
        headerName: 'Degree',
        width: 100,
        editable: false,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 150,
        editable: false,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 350,
    },
    {
        field: 'startDate',
        headerName: 'Start Date',
        type: 'number',
        width: 125,
    },
];

//Define the EmploymentTableDataGrid component
export default function EmploymentTableDataGrid({employmentTableHeader, employmentTable}) {
    //Define state variables
    const [loaded, setLoaded] = React.useState(false);
    const [rows, setRows] = useState([]);
    
    //Fetch and set data when component mounts
    React.useEffect(() => {
        //Define rows by tripping through the employment data
        let newRows = [];

        //For loop to push each row into an empty rows array
        //Populate the data into the empty rows array
        for (const employerInfoSet of employmentTable) {
            newRows.push({
                id: (newRows.length + 1),
                employer: (employerInfoSet.employer),
                degree: (employerInfoSet.degree),
                city: (employerInfoSet.city),
                title: (employerInfoSet.title),
                startDate: (employerInfoSet.startDate),
            });
        }

        setRows(newRows);
        setLoaded(true);
    }, []);
    
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    if (!loaded) return (
        <h4 class="loading">...Loading Employment Table...</h4>
    );

    //Render data grid component
    return (
        <div class="data-grid">
            {/* Render data grid header */}
            <h3 class="data-grid-header">{employmentTableHeader}</h3>
            <Box sx={{ height: 400, width: '100%' }} key={employmentTableHeader}>
                {/* Render data grid */}
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