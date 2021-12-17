import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDialogHidden } from "../../redux/dialog/dialog.actions";
import { selectDialogHidden } from "../../redux/dialog/dialog.selector";
import DialogBox from '../dialog/dialog.component';

function PopupDialog(props) {


  const dispatch = useDispatch();
  const toggleDialogHandler = () => dispatch(toggleDialogHidden());
  const open = useSelector(selectDialogHidden);

  return (
    <div>

      <Dialog open={open} handleClose={toggleDialogHandler}>

        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.dialogInner}</DialogContentText>

          {<DialogBox handleClose={toggleDialogHandler} {...props} />}

        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialogHandler}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.memo(PopupDialog);