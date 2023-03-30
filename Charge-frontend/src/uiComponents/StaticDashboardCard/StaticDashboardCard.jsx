// import React from "react";
// import {makeStyles, Paper } from "@material-ui/core";

// import "./StaticDashboardCard.css";

// import lock from "../../assets/dashboard-lock.svg";
// import check from "../../assets/dashboard-check.svg";

// const useStyles = makeStyles({
//   card: {
//     minWidth: "275px",
//     height: "275px",
//     borderRadius: "16px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "center",
//     margin: "1rem",
//     marginLeft: 0,
//   },
//   header: {
//     padding: "1.2rem",
//     background:
//       "linear-gradient(85.89deg, #F8C100 -7.54%, #FA652B 49.63%, #FD2D13 82.47%, #FF0000 108.45%)",
//     width: "-webkit-fill-available",
//     borderRadius: "16px 16px 0px 0px !important",
//     textAlign: "center",
//     fontWeight: "600",
//     fontSize: "17px",
//     fontFamily: "Manrope",
//   },
//   cardImg: {
//     width: "25%",
//     flex: "1 1 auto",
//   },
// });

// const StaticDashboardCard = ({ roundNo, status = "RR" }) => {
//   const classes = useStyles();
//   return (
//     <Paper className={classes.card}>
//       <div className={classes.header}>Round {roundNo}</div>
//       {status === "RR" ? ( // RR - review
//         <img className={classes.cardImg} src={sandGlass} alt="sandglass" />
//       ) : status === "AR" ? ( // AR = Approved
//         <img
//           className={`card-approved ${classes.cardImg}`}
//           src={check}
//           alt="check"
//         />
//       ) : status === "PR" ? ( // PR = Pending Review
//         <img className={classes.cardImg} src={sandGlass} alt="sandglass" />
//       ) : status === "MS" ? ( // missed slot interview
//         <img className={classes.cardImg} src={missedClock} alt="Missed" />
//       ) : status === "MT" ? ( // missed slot choosing
//         <img className={classes.cardImg} src={missedClock} alt="Missed" />
//       ) : status === "MP" ? ( // missed project submission
//         <img className={classes.cardImg} src={missedSubmission} alt="Missed" />
//       ) : status === "PP" ? ( // project review
//         <img className={classes.cardImg} src={projectReview} alt="review" />
//       ) : status === "ER" ? ( // excepion review
//         <img className={classes.cardImg} src={sandGlass} alt="sandglass" />
//       ) : (
//         <img className={classes.cardImg} src={lock} alt="lock" />
//       )}
//     </Paper>
//   );
// };

// export default StaticDashboardCard;
// // tech+design
