import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import { useHistory } from 'react-router-dom';

export default function GoBackButton() {
const history = useHistory();
    return (
       <IconButton sx={{marginRight:'90%'}} onClick={() => history.goBack()}>
            <ArrowBackIcon fontSize='large'/>
       </IconButton>

    );
}