import express from "express";
import User from "../models/user";
import Article from "../models/article";
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe";

const router = express.Router();

router.get("/", checkAuth, async (req, res) => {
  const user = await User.findOne({ email: req.user });
  console.log(user.stripeCustomerId);

  const subscriptions = await stripe.subscriptions.list(
    {
      customer: user.stripeCustomerId,
      status: "all",
      expand: ["data.default_payment_method"],
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  if (!subscriptions.data.length) return res.json([]);

  //@ts-ignore
  const plan = subscriptions.data[0].plan.nickname;

  if (plan === "All-In-One Plan") {
   
    return res.json("he All-In-One Plan");
  } else if (plan === "Workout Plan") {
   
    return res.json("he Workout Plan");
  } else {
  
    return res.json("he Nutrition  Plan");
  }

  res.json(plan);
});

export default router;
