import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import GoBackButton from '../../components/locators/GoBackButton.component';
import { addCompany, deleteCompany } from '../../redux/office/office.actions';
import { findOffice } from '../../redux/office/office.selector';

// import Item


const colors = ['#000000',
    '#FFFFFF',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF'];


const useStyles = makeStyles((theme) => ({
    cardHeader: {
        backgroundColor: theme.palette.action.selected,
    },
    MuiButtonBase2: {
        marginLeft: "80%",
    },
}));

function ManageCompanyPage(props) {
    const history = useHistory();

    const { id } = useParams();

    const title = id == 1 ? 'Add Office' : 'Edit Office'


    const office = useSelector(findOffice(id));

    const [company, setCompany] = useState({
        id: typeof office === 'undefined' ? -1 : office.id,
        companyName: typeof office === 'undefined' ? '' : office.companyName,
        telephone: typeof office === 'undefined' ? '' : office.telephone,
        email: typeof office === 'undefined' ? '' : office.email,
        location: typeof office === 'undefined' ? '' : office.location,
        capacity: typeof office === 'undefined' ? '' : office.capacity,
        color: typeof office === 'undefined' ? '' : office.color,
    })


    const dispatch = useDispatch();

    const handleChange = (event) => {
        // event.preventDefault();


        const { value, name } = event.currentTarget;

        setCompany({ ...company, [name]: value });
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        history.push('/')
        dispatch(deleteCompany(company.id));


    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        history.push('/')
        dispatch(addCompany(company));

    };

    const { companyName, telephone, email, location, capacity, color } = company;

    function renderSwitch() {
        switch (id) {
            case '1':
                return (
                    <Grid container direction={'column'} spacing={3}>
                        <Grid item xs={12}>

                            <Button type='submit' variant="contained" size="large">
                                Add Office
                            </Button>
                        </Grid>
                    </Grid>

                )
            default:
                return (
                    <Grid container direction={'column'} spacing={3}>

                        <Grid item xs={12}>

                            <Button type='submit' variant="contained" size="large">
                                Save Changes
                            </Button>
                        </Grid>
                        <Grid item xs={12}>

                            <Button id="error" onClick={handleDelete} variant="outlined" color="error" size="large">
                                Delete Office
                            </Button>
                        </Grid>
                    </Grid>
                )

        }
    }

    return (
        <section>

            <Container maxWidth="md">
                <Box pt={8} pb={10} textAlign="center">
                    <Grid container spacing={6}>

                        <Grid item xs={12} md={12}>
                            <Card>
                                <GoBackButton />

                                <CardHeader title={title}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment>
                                                <GoBackButton />
                                            </InputAdornment>),
                                    }}>

                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>

                                        <TextField
                                            sx={{ width: '90%', padding: '20px' }}
                                            size="normal"
                                            id="companyName"
                                            placeholder='Company Name'
                                            name='companyName'
                                            value={companyName}
                                            required
                                            not null
                                            onChange={handleChange}

                                        />

                                        <TextField
                                            sx={{ width: '90%', padding: '20px' }}
                                            size="normal"
                                            id="telephone"
                                            placeholder='Telephone'
                                            value={telephone}
                                            name='telephone'
                                            required
                                            onChange={handleChange}

                                        />

                                        <TextField
                                            sx={{ width: '90%', padding: '20px' }}
                                            size="normal"
                                            id="email"
                                            value={email}
                                            placeholder='Email'
                                            name='email'
                                            required
                                            onChange={handleChange}

                                        />
                                        <TextField
                                            sx={{ width: '90%', padding: '20px' }}
                                            size="normal"
                                            id="location"
                                            value={location}
                                            placeholder='Location'
                                            name='location'
                                            required
                                            onChange={handleChange}

                                        />

                                        <TextField
                                            sx={{ width: '90%', padding: '20px' }}
                                            size="normal"
                                            name='capacity'
                                            type="number"
                                            placeholder=' Office Capacity'
                                            id="capacity"
                                            required
                                            value={capacity}
                                            onChange={handleChange}

                                        />
                                        <Typography variant="h5" component="h5" gutterBottom={true}> Office Colour</Typography>



                                        {colors.map((c) => (
                                            <IconButton
                                                name="color"
                                                id='color'
                                                key={c}
                                                value={c}
                                                size='large'

                                                sx={{ borderWidth: '8px', borderStyle: 'solid', padding: '20px', backgroundColor: c, margin: '20px', borderColor: company.color === c ? '#AEAEAE' : 'white' }}
                                                onClick={handleChange}
                                            >

                                            </IconButton>
                                        ))}
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            {renderSwitch()}



                                        </Typography>

                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </section>

    )
}
export default React.memo(ManageCompanyPage);
