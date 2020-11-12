const express = require("express");
const cors = require("cors");
const app = express();
const Razorpay = require("razorpay");
const http = require("http");
var axios = require("axios");
var FormData = require("form-data");
var request = require("request");

app.use(cors());
app.listen(8000, () => {
  console.log("Server is listening at http://localhost:8000");
});

var amount

const instance = new Razorpay({
  key_id: "rzp_test_UaDS2uihjYJINF",
  key_secret: "9OeVss5nSiyBHnGnYjPrBD8f",
});

app.get("/order/:amount", (req, res) => {
  try {
    const options = {
      amount: req.params.amount * 100, // amount == Rs 10
      currency: "INR",
      receipt: "receipt#1",
      payment_capture: 0,
      // 1 for automatic capture // 0 for manual capture
    };
    amount = req.params.amount * 100
    instance.orders.create(options, async function (err, order) {
      if (err) {
        return res.status(500).json({
          message: "Something Went Wrong",
        });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
});

app.post("/capture/:paymentId", (req, res) => {
  //   try {
  //     return http.request(
  //       {
  //         method: "POST",
  //         url: `https://rzp_test_UaDS2uihjYJINF:9OeVss5nSiyBHnGnYjPrBD8f@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
  //         form: {
  //           amount: 10 * 1000, // amount == Rs 10 // Same As Order amount
  //           currency: "INR",
  //         },
  //       },
  //       async (err, response, body) => {
  //         if (err) {
  //           return res.status(500).json({
  //             message: "Something Went Wrong",
  //             err: err,
  //           });
  //         }
  //         req.console.log("Status:", response.statusCode);
  //         console.log("Headers:", JSON.stringify(response.headers));
  //         console.log("Response:", body);
  //         return res.status(200).json(body);
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json({
  //       message: "Something Went Wrong",
  //       err: err,
  //     });
  //   }

  //   Axios.default
  //     .post(
  //       `https://rzp_test_UaDS2uihjYJINF:9OeVss5nSiyBHnGnYjPrBD8f@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
  //       {
  //         form: {
  //           amount: 10 * 1000, // amount == Rs 10 // Same As Order amount
  //           currency: "INR",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   var data = new FormData();
  //   data.append("amount", 10 * 1000);
  //   data.append("currrency", "INR");

  //   var config = {
  //     method: "post",
  //     url: `https://rzp_test_UaDS2uihjYJINF:9OeVss5nSiyBHnGnYjPrBD8f@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  request(
    {
      method: "POST",
      url: `https://rzp_test_UaDS2uihjYJINF:9OeVss5nSiyBHnGnYjPrBD8f@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
      form: {
        amount: amount,
        currency: "INR",
      },
    },
    function (error, response, body) {
      console.log("Status:", response.statusCode);
      console.log("Headers:", JSON.stringify(response.headers));
      console.log("Response:", body);
    }
  );
});
