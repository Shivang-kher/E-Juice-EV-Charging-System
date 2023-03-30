import React, { useEffect } from "react";

import {
  Button,
  Dialog,
  TextField,
  Typography,
  withStyles,
  makeStyles,
} from "@material-ui/core";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import instance from "../../apis/recruitmentApi";
import { toastError } from "../../utils/userHelperFuncs";
import { useCookies } from "react-cookie";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: "515px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white",
    // color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "#FF7743",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#FF7743",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF7743",
      },
    },
  },
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
    marginLeft: "12px",
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
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className="customised-dialog-title-text">
        {children}
      </Typography>
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
    paddingTop: 0,
  },
}))(MuiDialogContent);


const SubmitProject = ({ openModal, toggleProjectModal, coreDomain }) => {
  const [open, setOpen] = React.useState(openModal);
  const [projectLink, setProjectLink] = React.useState("");
  const [cookies] = useCookies(["token"]);

  const classes = useStyles();
  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClose = () => {
    setOpen(false);
    toggleProjectModal();
  };

  const onSubmit = () => {
    if (projectLink === "") {
      return null;
    }
    instance
      .post(
        `/api/r2/project/${coreDomain}`,
        { projectLink },
        {
          headers: { Authorization: `Bearer ${cookies.token}` },
        }
      )
      .then((response) => {
        toggleProjectModal();
        if (response.data.data.passed) {
          return toastError("Deadline to submit the project has passed");
        }
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toastError("Please enter a link with https://");
      });
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          style={({ paddingTop: "18px" }, { width: "100%" })}
          onClose={handleClose}
        >
          Submit Project
        </DialogTitle>
        <DialogContent dividers>
          <DialogContent style={{ padding: "1rem 1rem" }}>
            <Typography
              style={{ color: "#FF7743", fontWeight: "600", textAlign: "left" }}
            >
              Once submitted cannot be changed
            </Typography>
          </DialogContent>

          <TextField
            style={{ width: "75%" }}
            label="Project URL"
            variant="outlined"
            className={classes.root}
            onChange={(e) => {
              setProjectLink(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={onSubmit}
            className={classes.Button}
          >
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubmitProject;
