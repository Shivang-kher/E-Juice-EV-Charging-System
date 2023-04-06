const RazorPay = require('razorpay');
const uniqueID = require('uniqid');

const instance = new RazorPay({
    key_id: "rzp_test_PkLnK7jALJsBvF",
    key_secret: "eD71E0b1ubXfkrvU25iNrGWq"
  });

exports.createOrder = (req, res) => {
            var options = {
                amount: 10000,
                currency: "INR",
                receipt: uniqueID()
            };
            instance.orders.create(options, function(err, order){
                if(err){
                    res.status(500).json({
                        error: err
                    })
                }
                res.json(order)
            })
}

exports.paymentCallback = (req, res) => {
    
}
