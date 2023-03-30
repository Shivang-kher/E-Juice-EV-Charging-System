const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email:
    {
      type:String
    },
    name: {
      type:String,
    },
    phoneNo: {
      type:String,
    },
    car: {
      type: String,
      enum : ['Tata Nexon','MG ZS','Hyundai Kona','Jaguar I-Pace','Audio e-tron','Tesla Model 3'],
      default: 'Tata Nexon'
    },
    chargingTech:
    {
      type:[String],
      // enum:['CHADEMO','CCS','TYPE 1','TYPE 2'],
      // default: 'CHADEMO'
    }
    
  }
)

const User = mongoose.model("user", userSchema);

module.exports = User;