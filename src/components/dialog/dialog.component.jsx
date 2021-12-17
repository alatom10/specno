import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  addEmployee, removeEmployee
} from '../../redux/office/office.actions';
import { selectEmployeeDetails } from "../../redux/office/office.selector";
import ConstraintWindow from "../constraintWindow/constraintWindow.component";



const steps = ["Enter employee details", "Choose an avatar"];


const avatarList = [
  {
    id: 1,
    link:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    link:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    link:
      "{https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    link:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
];


export default function DialogBox(props) {


  const employee = useSelector(selectEmployeeDetails(props.empid, props.id));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const compID = props.id;
  const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());

  const [employeeDetails, setDetails] = useState({
    id: typeof employee === 'undefined' ? '' : employee.id,
    firstName: typeof employee === 'undefined' ? '' : employee.firstName,
    lastName: typeof employee === 'undefined' ? '' : employee.lastName,
    avatar: typeof employee === 'undefined' ? '' : employee.avatar
  });


  const dispatch = useDispatch();



  useEffect(() => {
    console.log("Seeffect: ");

  }, [employee]); //TODO remove this
  
  const addEmployeeHandler = (fname, lname) => {

    dispatch(addEmployee({ firstName, lastName, avatar, id, compID }));
  }

  const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      addEmployeeHandler(employeeDetails);

    }
    catch (error) {
      console.log('error thrown' + error);

      setOpen(true);
    }
    props.handleClose();

  };

  const handleDelete = async (event) => {
    dispatch(removeEmployee({ compID, id }));
    props.handleClose();

  };

  const handleChange = (event) => {


    const { value, name } = event.currentTarget;

    setDetails({ ...employeeDetails, [name]: value });
  };


  const isStepOptional = (step) => {
    return step === 3;
  };



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  const { id, firstName, lastName, avatar } = employeeDetails;
  function renderSwitch(param) {
    switch (param) {
      case 0:
        return (
          <div>
            <TextField
              autoFocus
              margin="dense"
              value={firstName}
              id="fname"
              contentEditable
              name="firstName"
              label="First Name"
              onChange={handleChange}
              type="text"
              fullWidth
              variant="standard"
              required
            />

            <TextField
              autoFocus
              margin="dense"
              name="lastName"
              value={lastName}
              contentEditable
              id="lname"
              onChange={handleChange}
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              required
            />
          </div>
        );
      case 1:
        return (
          <div>
            {avatarList.map((al) => (
              <IconButton
                name="avatar"
                id={al.link}
                key={al.link}
                value={al.link}
                onClick={handleChange}
                sx={{ margin: '15px', backgroundColor: al.link === avatar ? '#AEAEAE' : '' }}
              >
                <Avatar
                  component='IconButton'
                  src={al.link}
                  key={al.link}
                  id={al.link}
                />
              </IconButton>
            ))}

          
          </div>
        );
      default:
        return "foo";
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <ConstraintWindow open={open} handleClose={handleClose} handleOpen={handleOpen} />
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label} </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - employee saved
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
            {renderSwitch(activeStep)}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {props.empid != 0 && (
              <Button variant="outlined" color="error" onClick={handleDelete}>
                Delete Employee
              </Button>
            )}

            <Button onClick={() => activeStep === steps.length - 1 ? handleSubmit() : handleNext()}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}