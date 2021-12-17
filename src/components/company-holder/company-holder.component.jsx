import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PeopleIcon from '@mui/icons-material/People';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Fab from '@mui/material/Fab';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Company({ id, companyName, telephone, email, location, capacity, employees, color }) {


    const useStyles = makeStyles((theme) => ({
        cardHeader: {
            backgroundColor: color != '' ? color : theme.palette.action.selected,
        },
        MuiButtonBase2: {
            marginLeft: "80%",
        },
    }));

    const history = useHistory();
    const classes = useStyles();
    const urlLocation = useLocation();


    return (
        <Grid item xs={12} md={6}>
            <Card>
                <CardHeader title={companyName} className={classes.cardHeader}></CardHeader>
                <CardContent>
                    <Fab className={classes.MuiButtonBase2} color="secondary" aria-label="edit"
                        onClick={() => urlLocation.pathname.includes('manage-office') ? history.push(`/manage-company/${id}`) : history.push(`/manage-office/${id}`)}
                    >
                        <EditIcon />
                    </Fab>

                    <Box pt={2} pb={1} px={1}>
                        <Typography variant="h3" component="h2" gutterBottom={true}>
                            {employees.length}
                        </Typography>

                            <Typography variant="h6" color="textSecondary" component="span"> Employees in office</Typography>
                       
                    </Box>
                </CardContent>
                <CardActions>
                    <Accordion sx={{ flexGrow: 1 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>More Info</Typography>
                        </AccordionSummary>
                        <AccordionDetails>


                            <TextField
                                fullWidth
                                id="input-with-icon-textfield"
                                disabled
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            ☏
                                        </InputAdornment>
                                    ),
                                    style: { padding: "20px" }

                                }}
                                value={telephone}
                                variant="standard"
                            />

                            <TextField
                                fullWidth
                                disabled
                                id="input-with-icon-textfield"
                                // label="TextField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            ✉
                                        </InputAdornment>
                                    ),
                                    style: { padding: "20px" }

                                }}
                                value={email}
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                disabled
                                id="input-with-icon-textfield"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationCityIcon />
                                        </InputAdornment>
                                    ),
                                    style: { padding: "20px" }

                                }}
                                value={location}
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                disabled
                                id="input-with-icon-textfield"
                                // label="TextField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PeopleIcon /> Office Capacity :
                                        </InputAdornment>
                                    ),
                                    style: { padding: "20px" }

                                }}
                                size='large'
                                variant="standard"
                                value={capacity}
                            >
                                {capacity}
                            </TextField>


                        </AccordionDetails>
                    </Accordion>


                </CardActions>
            </Card>
        </Grid>

    );
}
export default React.memo(Company);