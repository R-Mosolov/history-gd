import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Configs
import { ObjConfig } from '../configs';

interface Props {
  alertTitle: string;
  alertContent: string;
  alertActions: Array<object>;
  isAlertDialog: boolean;
  setAlertDialog: () => {} | void;
  alertCallback?: any;
}

export default function AlertDialog(props: Props) {
  const {
    alertTitle,
    alertContent,
    alertActions,
    isAlertDialog,
    setAlertDialog,
    alertCallback = null,
  } = props;

  const handleClose = () => {
    setAlertDialog();
  };

  return (
    <div>
      <Dialog
        open={isAlertDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {alertActions.map((item: ObjConfig) => {
            return (
              <Button
                onClick={() => {
                  handleClose();
                  if (
                    alertCallback !== null &&
                    typeof alertCallback === 'function'
                  ) {
                    alertCallback();
                  }
                }}
                color="primary"
              >
                {item.text}
              </Button>
            );
          })}
        </DialogActions>
      </Dialog>
    </div>
  );
}
