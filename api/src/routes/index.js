const express = require("express");
const GameRouter = require("./game.routes.js");
const UserRouter = require("./user.routes.js");
const AuthRouter = require("./authentication.routes");
const SendEmailRouter = require("./sendemails.routes.js");
const PaymentRouter = require("./payment.routes.js");
const ReviewsRouter = require("./reviews.routes.js");

const router = express.Router();

router.use("/", GameRouter);
router.use("/payment", PaymentRouter);
router.use("/users", UserRouter);
router.use("/auth", AuthRouter);
router.use("/email", SendEmailRouter);
router.use("/reviews", ReviewsRouter);
router.use("*/*", (req, res) => {
  try {
    res.status(404).send(`This page doesn't exists`);
  } catch (error) {
    res.status(404).send(`This page doesn't exists`);
  }
});

module.exports = router;
