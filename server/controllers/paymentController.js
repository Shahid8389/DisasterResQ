import Stripe from 'stripe'

// Stripe gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const paymentStripe = async (req, res) => {
  try {

    const { amount } = req.body;
    const { origin } = req.headers;

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}`,
      cancel_url: `${origin}`,
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "DisasterResQ",
            },
            unit_amount: amount * 100
          },
          quantity: 1
        }
      ],
      mode: 'payment'
    })

    res.json({
      success: true,
      session_url: session.url
    })

  } catch (error) {
    console.log("Error while processing payment: ", error);

    res.json({
      success: false,
      message: error.message
    })
  }
}

export { paymentStripe }