import React, { useEffect, useState } from "react";
import { useRef } from "react";

function Paypal() {
  const [paid, setPaid] = useState(false);
  const [error, setError] = React.useState(null);

  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "INR",
                  value: 500.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          //   setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  if (paid) {
    return <div>Payment successful.!</div>;
  }

  

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  return  <div>
  {paidFor ? (
    <div>
      <h1>{product.description}</h1>
      <div ref={(v) => (paypalRef = v)}></div>
    </div>
  ) : (
    ""
  )}
</div>;
}

export default Paypal;
