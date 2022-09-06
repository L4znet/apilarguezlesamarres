/**
 * @swagger
 *
 * tags:
 *   - name: Paiements
 *     description: Le endpoint de paiement
 * /payment-sheet:
 *   post:
 *     tags:
 *     - Paiements
 *     summary: Gère la transaction de paiement vers Stripe
 *     description: Gère la transaction de paiement vers Stripe
 *     parameters:
 *         - in: query
 *           name: amount
 *           required: true
 *           schema:
 *             type: integer
 *           description: Le montant du paiement
 *
 */


const express = require('express');
const router = express.Router();
require("dotenv").config();
const bodyParser = require("body-parser");
const stripe = require('stripe')('sk_test_51LVn5JL4arJWUBbmGrTKdU70HzRp95Zl6yDNVDsCAHtIySPYhsgPf5QQP2GKkp0aPGeXIdrphfCd5miTLYK9rQ1d00eZFJzJ9H');

let jsonParser = bodyParser.json()

router.post('/payment-sheet',jsonParser, async (req, res) => {

        const customer = await stripe.customers.create();
        const ephemeralKey = await stripe.ephemeralKeys.create(
            {customer: customer.id},
            {apiVersion: '2022-08-01'}
        );
        const paymentIntent = await stripe.paymentIntents.create({
            amount: (req.body.amount * 100) + 2000, // On applique une marge de 20 euros
            currency: 'eur',
            customer: customer.id,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
            publishableKey: 'pk_test_51LVn5JL4arJWUBbmOSkZphMuSBftatz3P54TS9huruc1XOCN1RqcIrLUmHxNwEtWE7R1m48BWkXoqEgDLCixHP2y00MPGChMt8'
        });


})


module.exports.router = router;
