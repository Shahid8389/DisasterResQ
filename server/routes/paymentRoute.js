import express from 'express'
import { paymentStripe } from '../controllers/paymentController.js'


const paymentRouter = express.Router()

paymentRouter.post("/payment", paymentStripe)

export default paymentRouter