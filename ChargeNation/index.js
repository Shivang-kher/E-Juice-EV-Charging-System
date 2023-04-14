const express= require("express");
require("dotenv").config();
const connectToMongo= require("./models/db");
require('./config/passport.js');
var cors = require('cors')
const midd=require('./middleware/authentication');


const app=express();
app.use(express.json())
app.use(cors());
const DB_URL=process.env.DB_URL;
const PORT = 4000;

connectToMongo().on("connected", () => {
  console.log("Mongoose is connected");
})

app.get("/",(req,res) => {
  res.send("The server is running!");
});

const authRoutes = require("./routes/authentication");
const isFilledForm = require("./routes/isFilledForm");
const paymentRoute =  require("./routes/Paymentroutes");
app.use("/auth", authRoutes);
app.use("/dashboard",midd, isFilledForm);
app.use("/api", paymentRoute)

app.listen(PORT, () => {
  console.log("Server ready at port:", PORT);
});
