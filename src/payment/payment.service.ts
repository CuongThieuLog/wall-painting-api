import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { PaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: '2024-06-20',
    });
  }

  async createPaymentIntent({ amount }: PaymentDto) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });

      return { paymentIntent: paymentIntent.client_secret };
    } catch (error) {
      return error;
    }
  }
}
