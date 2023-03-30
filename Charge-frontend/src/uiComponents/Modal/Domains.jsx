import React from "react";
import "./Domain.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const Domains = ({ setShowInstr, showInstr = true }) => {
  const history = useHistory();
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: "white",
      // color: theme.palette.grey[500],
    },
    dialog: { backgroundColor: "#FF7743" },
  });
  const classes = makeStyles(styles);
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  return (
    <Dialog
      onClose={() => {
        if (window.location.pathname === "/domains") {
          return history.push("/dashboard");
        }
        setShowInstr(false);
      }}
      aria-labelledby="customized-dialog-title"
      open={showInstr}
    >
      <DialogTitle
        id="customized-dialog-title"
        style={{ "backgroundColor": "#FF7743","font-family":"Manrope","color":"white" }}
        classes={classes.dialog}
        onClose={() => {
          if (window.location.pathname === "/domains") {
            return history.push("/dashboard");
          }
          setShowInstr(false);
        }}
      >
        Technologies
      </DialogTitle>
      <DialogContent dividers style={{"font-family": "Manrope"}}>
        <ul style={{ "padding-left": "20px" }}>
          <li>
            <b>CHAdeMO</b> - This quick charging system was developed in Japan, and allows for very high charging capacities as well as bidirectional charging. Currently, Asian car manufacturers are leading the way in offering electric cars that are compatible with a CHAdeMO plug. It allows charging up to 100 kW.
          </li>
          <li style={{ "padding-top": "7px" }}>
            <b>CCS</b> - The CCS plug is an enhanced version of the type 2 plug, with two additional power contacts for the purposes of quick charging. It supports AC and DC charging. It allows charging at a speed of up to 350 kW. 
          </li>
          <li style={{ "padding-top": "7px" }}>
            <b>Type 1</b> - Type 1 is a single-phase plug and is standard for EVs from America and Asia. It allows you to charge your car at a speed of up to 7.4 kW, depending on the charging power of your car and grid capability. 
          </li>
          <li style={{ "padding-top": "7px" }}>
            <b>Type 2</b> - Type 2 plugs are triple-phase plugs because they have three additional wires to let current run through. So naturally, they can charge your car faster. At home, the highest charging power rate is 22 kW, while public charging stations can have a charging power up to 43 kW, again depending on the charging power of your car and grid capability.
          </li>         
        </ul>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default Domains;
