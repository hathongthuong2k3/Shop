import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { returnURL, createPaymentURL } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-checkout-session",protectRoute, createPaymentURL);
router.get("/return",  returnURL);

export default router;