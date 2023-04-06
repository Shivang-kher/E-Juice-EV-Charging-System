// import React, { useState } from "react";
// import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
// import { useCookies } from "react-cookie";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     minWidth: "275px",
//     maxWidth: "275px",
//     height: "275px",
//     borderRadius: "16px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     margin: "1rem",
//     marginLeft: 500,
//     paddingBottom: "0",
//   },
//   header: {
//     padding: "1.2rem",
//     background:
//       "linear-gradient(85.89deg, #F8C100 -7.54%, #6DBE45 49.63%, #6DBE45 82.47%, #6DBE45 108.45%)",
//     width: "-webkit-fill-available",
//     borderRadius: "16px 16px 0px 0px !important",
//     textAlign: "center",
//     fontWeight: "600",
//     fontSize: "17px",
//     fontFamily: "Manrope",
//   },
//   divider: {
//     width: "100%",
//     height: 1,
//     backgroundColor: "#0A0A0A",
//   },
//   cardContent: {
//     display: "flex",
//     flexDirection: "column",
//     flexWrap: "wrap",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "space-evenly",
//     margin: "0 1rem",
//     paddingTop: "2rem",
//     fontFamily: "Manrope",
//   },
//   cardContentScheduled: {
//     minWidth: "275px",
//     maxWidth: "275px",
//     height: "275px",
//     borderRadius: "16px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     marginLeft: 0,
//     paddingBottom: "0",
//     marginTop: "38px",
//   },
//   cardTop: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   btn: {
//     color: "#FA652B",
//     fontWeight: "600",
//   },
//   inactiveText: {
//     marginTop: "0.75rem",
//     color: "#8F8F8F",
//   },
//   textWrap: {
//     display: "flex",
//     flexWrap: "wrap",
//     whiteSpace: "normal",
//   },
// }));

// const Round3 = ({
//   status,
//   data
// }) => {
//   const classes = useStyles();
//   const [ready, setReady] = useState(status === "RD");

//   return (
//     <Paper className={classes.card}>
//       <div className={classes.header}> {data.car}</div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <div>{data.chargingTech}</div>
//       <br></br>
//       <br></br>

//         <Button variant="contained"
//         className={classes.Button}
//         href="https://i.postimg.cc/HkzPJpFR/qr.jpg">Recharge Now</Button>
//     </Paper>
//   );
// };

// export default Round3;
import React, { useState } from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { useCookies } from "react-cookie";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51MtWNESBGj2MFLplmbjtYiH11ExCUVsEyhhJXSdfGxjgkr8iiDVEWeT71zxniuutTNH42qWQjr8LbOarvDDTzCfC00HwCrlH86");

const useStyles = makeStyles((theme) => ({
  card: {
        minWidth: "275px",
        maxWidth: "275px",
        height: "275px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "1rem",
        marginLeft: 500,
        paddingBottom: "0",
      },
      header: {
        padding: "1.2rem",
        background:
          "linear-gradient(85.89deg, #F8C100 -7.54%, #6DBE45 49.63%, #6DBE45 82.47%, #6DBE45 108.45%)",
        width: "-webkit-fill-available",
        borderRadius: "16px 16px 0px 0px !important",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "17px",
        fontFamily: "Manrope",
      },
      divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#0A0A0A",
      },
      cardContent: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "0 1rem",
        paddingTop: "2rem",
        fontFamily: "Manrope",
      },
      cardContentScheduled: {
        minWidth: "275px",
        maxWidth: "275px",
        height: "275px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 0,
        paddingBottom: "0",
        marginTop: "38px",
      },
      cardTop: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      btn: {
        color: "#FA652B",
        fontWeight: "600",
      },
      inactiveText: {
        marginTop: "0.75rem",
        color: "#8F8F8F",
      },
      textWrap: {
        display: "flex",
        flexWrap: "wrap",
        whiteSpace: "normal",
      }
}));

const Round3 = ({ status, data }) => {
  const classes = useStyles();
  const [ready, setReady] = useState(status === "RD");

  // const handleClick = async () => {
  //   const stripe = await stripePromise;
  //   const response = await fetch("/create-payment-intent", { method: "POST" });
  //   const { clientSecret } = await response.json();
  //   const result = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: {
  //         number: "4242424242424242",
  //         exp_month: 12,
  //         exp_year: 2022,
  //         cvc: "123",
  //       },
  //     },
  //   });
  //   if (result.error) {
  //     // Handle error
  //     console.error(result.error.message);
  //   } else {
  //     // Handle success
  //     console.log(result.paymentIntent);
  //   }
  // };

  const handleClick = () => {
    window.location.href = "https://rzp.io/l/TOgFaXHvG";
  };

  return (
    <Paper className={classes.card}>
      <div className={classes.header}> {data.car}</div>
      <br></br>
      <br></br>
      <br></br>
      <div>{data.chargingTech}</div>
      <br></br>
      <br></br>
      <Button
        variant="contained"
        className={classes.Button}
        onClick={handleClick}
      >
        Process Payment
      </Button>
    </Paper>
  );
};

export default Round3;
