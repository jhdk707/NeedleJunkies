import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function MyTech() {
    const [turntableValue, setTurntableValue] = React.useState('');
    const [ampValue, setAmpValue] = React.useState('');
    const [speakersValue, setSpeakersValue] = React.useState('');
    const [otherGearValue, setOtherGearValue] = React.useState('');

    const handleTurntableChange = (event) => {
        setTurntableValue(event.target.value);
    };

    const handleAmpChange = (event) => {
        setAmpValue(event.target.value);
    };

    const handleSpeakersChange = (event) => {
        setSpeakersValue(event.target.value);
    };

    const handleOtherGearChange = (event) => {
        setOtherGearValue(event.target.value);
    };

    const handleUpdate = () => {
        // Perform actions with the updated values
        console.log('Turntable:', turntableValue);
        console.log('Amp:', ampValue);
        console.log('Speakers:', speakersValue);
        console.log('Other Gear:', otherGearValue);
    };

    return (
        <Box>
            <Typography variant="h6">My Tech:</Typography>
            <Box mt={2}>
                <Typography>
                    Turntable:
                </Typography>
                <TextField label="Turntable Input" onChange={handleTurntableChange} />
            </Box>
            <Box mt={2}>
                <Typography>
                    Amp:
                </Typography>
                <TextField label="Amp Input" onChange={handleAmpChange} />
            </Box>
            <Box mt={2}>
                <Typography>
                    Speakers:
                </Typography>
                <TextField label="Speakers Input" onChange={handleSpeakersChange} />
            </Box>
            <Box mt={2}>
                <Typography>
                    Other Gear:
                </Typography>
                <TextField label="Other Gear Input" onChange={handleOtherGearChange} />
            </Box>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleUpdate}>
                    Update
                </Button>
            </Box>
        </Box>
    );
}

export default MyTech;
