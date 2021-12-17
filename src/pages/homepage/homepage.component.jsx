// import { Box, Typography } from '@mui/system';
// import  from '@material-ui/core/Box';
import { Box, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Company from '../../components/company-holder/company-holder.component';
import PopupDialog from '../../components/popup/PopupDialog.component';
import { selectOfficeItems } from '../../redux/office/office.selector';



function HomePage(props, { offices }) {

  const history = useHistory();
  const states = useSelector(selectOfficeItems);

  return (
    <Container maxWidth="md">

      <Box pt={8} pb={10} textAlign="center">

        <Fab className='fab' color="primary" aria-label="add" value={0}
          onClick={() => history.push(`/manage-company/${1}`)}

        >
          <AddIcon />
        </Fab>
        <PopupDialog dialogType='COMPANY' dialogInner='Add Office details' dialogTitle='Add Office' />

        <Typography variant="h4" component="h2" gutterBottom={true}>All Companies</Typography>
        <Grid container spacing={6}>

          {states.map(office => (


            <Company  {...office} />
          ))}
        </Grid>

      </Box>
    </Container>


  );
}

export default HomePage;
