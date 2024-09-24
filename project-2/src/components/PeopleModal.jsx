//Import necessary dependencies
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './People.css';




//Define styles for the modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//Define the PeopleModal component
export default function PeopleModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <br></br>
            <Button onClick={handleOpen} variant="outlined">{props.name}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="modalBox">
                    <Typography variant="h4" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {props.tagline}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {props.title}
                    </Typography>

                    <img src={props.imagePath} alt={props.name + "'s image"}></img>

                    
                    <Typography variant="h6" component="h2">
                        {props.office}
                    </Typography>

                    {/* If data is empty/does not exist, does not use it */}
                    {props.website &&
                        <Typography variant="h6" component="h2">
                            Website: <a href={props.website} target="_blank">{props.website}</a>
                        </Typography>
                    }
                    {/* If data is empty/does not exist, does not use it */}
                    {props.website &&
                        <Typography variant="h6" component="h2">
                            Email: <a href={'mailto:' + props.email} target="_blank">{props.email}</a>
                        </Typography>
                    }
                    {/* If data is empty/does not exist, does not use it */}
                    {props.twitter &&
                        <Typography variant="h6" component="h2">
                            Twitter: <a href={props.twitter} target="_blank">{props.twitter}</a>
                        </Typography>
                    }
                    {/* If data is empty/does not exist, does not use it */}
                    {props.facebook &&
                        <Typography variant="h6" component="h2">
                            Facebook: <a href={props.facebook} target="_blank">{props.facebook}</a>
                        </Typography>
                    }
                </Box>
            </Modal>
        </div>
    );
}