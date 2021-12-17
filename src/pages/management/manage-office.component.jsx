import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import Fab from '@mui/material/Fab';
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Company from '../../components/company-holder/company-holder.component';
import GoBackButton from '../../components/locators/GoBackButton.component';
import PopupDialog from '../../components/popup/PopupDialog.component';
import { toggleDialogHidden } from '../../redux/dialog/dialog.actions';
import { findOffice, selectOfficeItems } from '../../redux/office/office.selector';




function ManagePage(props) {

    let { id } = useParams();
    const office = useSelector(findOffice(id));


    const [empid, setEmpID] = useState('');
    const [search, setNewSearch] = useState('');

    const emps = office.employees.filter(employee => (employee.firstName.includes(search) || employee.lastName.includes(search)) && employee)

    let show = false;
    const dispatch = useDispatch();
    const toggleDialogHandler = () => dispatch(toggleDialogHidden());

    const newSearch = (event) => {
        const { value } = event.currentTarget;
        setNewSearch(value);
    }
    const handleClickOpen = (event) => {
        const { value, name } = event.currentTarget;

        toggleDialogHandler();

        setEmpID(value);
    };


    return (
        <div className='homepage'>
            <Container paddingTop='1000vh' sx={{ marginTop: '100px' }}>

                <PopupDialog empid={empid} show={show} id={id} dialogType='EMP' />
                <Fab className='fab' color="primary" aria-label="add" value={0}
                    onClick={handleClickOpen}

                >
                    <AddIcon />
                </Fab>

                <Box p={2} pt={1} pb={10} textAlign="center" bgcolor='white'>
                    <GoBackButton />

                    <Company  {...office} />

                    <TextField
                        fullWidth
                        textAlign='center'
                        placeholder='Search...'
                        onChange={newSearch}
                        id='search'
                        InputProps={{
                            inputProps: {
                                style: { textAlign: "center" },
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="start">
                                    {emps.length}
                                </InputAdornment>),
                        }}
                    ></TextField>

                    {emps.length > 0 ? emps.map(employee => (


                        <TextField
                            fullWidth
                            disabled
                            value={employee.firstName + " " + employee.lastName}
                            textAlign='center'
                            InputProps={{
                                inputProps: {
                                    style: { textAlign: "center" },
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Avatar
                                            src={employee.avatar}
                                        />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            name="fd"
                                            // id={al.link}
                                            // key={al.link}
                                            value={employee.id}
                                            onClick={handleClickOpen}


                                        >
                                            <MoreVertIcon />

                                        </IconButton>
                                    </InputAdornment>),
                            }}

                        >
                            {employee.firstName}   
                        </TextField>
                    )
                    ) : (<Typography sx={{ mt: 2, mb: 1 }}> No employees available   </Typography>)}
                </Box>
            </Container >
        </div>);
}
export default React.memo(ManagePage);
