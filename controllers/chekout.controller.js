const Cart = require("../models/Cart");

const stripe = require("stripe")(
  "sk_test_51P9aRyRxAlUJMtcKsbWcLGBRMEnPJ5eYzuIJGnNqtltlj8PW87BQD5q5eQ74pjhCf7rtfNup360vtlyzfx8brF24007WvAk6iN"
);

exports.makePayment = async (req, res) => {
  const userId = req.params.userId;

  try {
    const cart = await Cart.findOne({ userId: userId });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cart.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "http://localhost:3000/checkoutsuccess",
      cancel_url: "http://localhost:3000/checkoutfail",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
    console.log(error);
    console.log(userId)
  }
};
