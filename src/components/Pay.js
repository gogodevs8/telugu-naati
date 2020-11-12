import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

function Pay() {
  const [paidFor, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: "100",
    description: "helloo",
    image: "jncsjncc",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ATnyzUy2LQadz5E_v1aXuro2AiT-HOhFNmlw5W-jlrkDUUxK2Aq1AkZiBReIcllQ8P5DdRR9k-H7fsLb&currency=INR";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);
    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                // intent: "CAPTURE",
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
          })
          .render(paypalRef);
      });
    }
  });

  return (

    
    <div>
        <Button onClick={() => setPaid(true)}>Pay</Button>
      {paidFor ? (
        <div>
          <h1>{product.description}</h1>
          <div ref={(v) => (paypalRef = v)}></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Pay;
