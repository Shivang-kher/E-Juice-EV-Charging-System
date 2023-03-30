import React, { useEffect } from "react";

import { Dialog, Typography, withStyles, makeStyles } from "@material-ui/core";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ProjectBulb from "../../assets/ProjectBulb.svg";

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
    margin: 0,
    padding: theme.spacing(2),
    width: "515px",
    height: "361px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  Dialog: {
    borderRadius: "21px",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white",
    // color: theme.palette.grey[500],
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
    // padding: theme.spacing(4),
    height: "180px",
    padding: "14px",
    overflow: "none",
  },
}))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

const ViewProject = ({
  openModal,
  toggleProjectModal,
  projectTitle,
  projectDesc,
}) => {
  const [open, setOpen] = React.useState(openModal);
  const classes = useStyles();

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClose = () => {
    setOpen(false);
    toggleProjectModal();
  };

  return (
    <div className="customized-dialog">
      <Dialog
        id="customized-dialog"
        classes={{ Dialog: classes.Dialog }}
        className={`${classes.Dialog} customized-dialog`}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="customized-dialog">
          <DialogTitle
            id="customized-dialog-title"
            style={{ paddingTop: "18px" }}
            onClose={handleClose}
          >
            View Project
          </DialogTitle>
          <DialogContent dividers>
            <h3 style={{ width: "300px" }}>{projectTitle}</h3>
            <div style={{ width: "300px" }}>{projectDesc}</div>
          </DialogContent>
          <img
            src={ProjectBulb}
            style={{
              width: "200px",
              height: "230px",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
            alt="project-bulb"
          />
        </div>
      </Dialog>
    </div>
  );
};

export default ViewProject;
