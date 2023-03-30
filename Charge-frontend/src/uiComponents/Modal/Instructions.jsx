import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  Button: {
    background: "#FA652B",
    // border: "1.18982px solid #F0D8BD",
    boxSizing: "border-box",
    borderRadius: "4.04538px",
    marginTop: "2vh",
    color: "#FFFFFF",
    alignItems: "center",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "0.0125em",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#fc5919",
      boxShadow: "0px 0px 1px 1px #fd510d",
    },
    "&:active": {
      backgroundColor: "#fd5411",
      boxShadow: "0px 0px 3px 1px rgba(31, 150, 255, 0.6)",
    },
  },
}));
const Instructions = ({ setShowInstr, showInstr = true }) => {
  const muiClasses = useStyles();
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
  });

  const onContinue = () => {
    if (window.location.pathname === "/instructions") {
      return history.push("/dashboard");
    }
    setShowInstr(false);
  };

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
      maxWidth="md"
      onClose={() => {
        if (window.location.pathname === "/instructions") {
          return history.push("/dashboard");
        }
        setShowInstr(false);
      }}
      aria-labelledby="customized-dialog-title"
      open={showInstr}
    >
      <DialogTitle
        id="customized-dialog-title"
        style={{ "font-family": "Manrope", color: "white" }}
        onClose={() => {
          if (window.location.pathname === "/instructions") {
            return history.push("/dashboard");
          }
          setShowInstr(false);
        }}
      >
        Instructions
      </DialogTitle>
      <DialogContent dividers>
        <ol style={{ "padding-left": "20px" }}>
          {/* <b>
            Please ensure to read all the instructions before you sit for your
            recruitment process. Do not disclose any information regarding any
            rounds or the tasks upon completion.
          </b> */}
          <li style={{ "padding-top": "15px" }}>
            Please ensure to read all the instructions before you sit for your
            recruitment process. Do not disclose any information regarding any
            rounds or the tasks upon completion.
          </li>
          <li style={{ "padding-top": "7px" }}>
            Videos must be kept on during all rounds of the recruitment process.
            Kindly take the necessary measures to ensure this.
          </li>
          <li style={{ "padding-top": "7px" }}>
            Any misbehaviour or misconduct of any sort will be dealt with
            extreme seriousness.
          </li>
          <li style={{ "padding-top": "7px" }}>
            Any evidence found of the above will affect your performance in the
            entire recruitment process.
          </li>
          <li style={{ "padding-top": "7px" }}>
            While attending the interviews, please ensure to have a stable
            internet connection and minimum background noise.
          </li>
          <li style={{ "padding-top": "7px" }}>
            All progress updates will be visible to you on the portal. Please
            use the chatbot to ask any queries and if you are still not
            comfortable with our chatbot you are very welcome to contact us on
            our socials.
          </li>
          <li style={{ "padding-top": "7px" }}>
            In case of any immediate need for information or update, we will
            contact you via your phone number or email address. KEEP CHECKING
            FOR UPDATES.
          </li>
          <h4>Procedure for recruitments</h4>
        </ol>
        <ol style={{ "padding-left": "20px" }}>
          <li style={{ "padding-top": "7px" }}>
            Round 2 (Management): In the portal, you will be asked to choose your time slot for
            your management round. Management round is conducted
            in two phases, the GD pool and the GDA. During the slot timing, please click
            the "Join" button to join a meet link to the GD (Group Discussion)
            pool where you will have a group discussion with a larger batch of
            candidates and few recruiters. So please maintain the decorum while
            your round is happening. Once the GD pool is done, you will be asked
            to refresh the page and click “GDA” which will redirect you to a
            meet link where you will have a one-to-one interview. After GDA, you
            will have exactly 48 hours to submit the project that was assigned.
            If you miss the deadline, you will not be able to submit the project
            and cannot proceed further.
          </li>
          <li style={{ "padding-top": "7px" }}>
            Round 2 (Tech): You will be asked to choose your time slot for your
            Tech/Design round in the portal. During the slot timing, please
            click the "I'm ready" button to then receive a meet link where you
            will be instructed further about the round 2 procedure. After round
            2, you will have exactly 72 hours to submit the project that was
            assigned. If you miss the deadline, you will not be able to submit
            the project and cannot proceed further.
          </li>
          <li style={{ "padding-top": "7px" }}>
            Round 3: When your project is submitted you will get access to
            choose your preferred time slot for round 3. At the time of round 3,
            please click the "I'm ready" button to then receive a meet link
            where you will undergo the proceedings of round 3.
          </li>
        </ol>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={onContinue}
            className={muiClasses.Button}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default Instructions;
