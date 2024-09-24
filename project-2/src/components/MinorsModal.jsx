//Import necessary dependencies
import React from 'react';
import { useState, useEffect } from 'react'
import getData from '../utils/getData'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Minors.css';




//Define styles for the modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//Define the MinorsModal component
export default function MinorsModal({course}) {
    //state
    //const [var, setVar] = useState(init);
    //Define state variables
    const [loaded, setLoaded] = React.useState(false);
    const [courseObj, setCourseObj] = useState();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Fetch data from API using useEffect hook
    React.useEffect(() => {
        //The page was just rendered, now get data!
        //I am going to use the getData method in utils
        getData("course/courseID=" + course)
            .then((json) => {
            console.log(course);
            console.log(json);
            setCourseObj(json);
            setLoaded(true);
            })
    }, []);
    
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    //Render modal content based on loading state
    if (!loaded) return (
        <h4>...Loading Course...</h4>
    );

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined">{course}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="minorModalBox">
                    <Typography variant="h4" component="h2">
                        {courseObj.title + " (" + courseObj.courseID + ")"}
                    </Typography>
                    <br></br>
                    <Typography variant="h6" component="h2">
                        <p>{courseObj.description}</p>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}