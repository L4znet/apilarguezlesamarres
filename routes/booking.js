/**
 * @swagger
 *
 * tags:
 *   - name: pet
 *     description: Everything about your Pets
 * /posts:
 *   get:
 *     tags:
 *     - pet
 *     summary: Récupère les dernières offres
 *     description: Récupères les 5 dernières offres
 *     responses:
 *       200:
 *         description: Les offres
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 offers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The offer ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: Offer's title.
 *                         example: Yacht Imperator
 * /post:
 *   post:
 *     tags:
 *     - pet
 *     summary: test
 *     description: Récupères les 5 dernières offres
 *     responses:
 *       200:
 *         description: Les offres
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 offers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The offer ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: Offer's title.
 *                         example: Yacht Imperator
 * /post/{id}:
 *   get:
 *     tags:
 *     - pet
 *     summary: Récupère une offre par son id
 *     description: Récupère une offre par son id
 *     responses:
 *       200:
 *         description: Une offre
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 offers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The offer ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: Offer's title.
 *                         example: Yacht Imperator
 *
 */


const express = require('express');
const router = express.Router();

const {collection, setDoc, doc, getDatabase, query, getDocs, getFirestore, serverTimestamp, orderBy, limit, getDoc} = require("firebase/firestore");
const bodyParser = require("body-parser");
const {initializeApp} = require("firebase/app");
const {getStorage} = require("firebase/storage");
const {getAuth} = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyD-emfrFSphjqf6WipZNCUs3Br6cX5Jg8Q",
    authDomain: "larguezlesamarres-a1817.firebaseapp.com",
    databaseURL: "https://larguezlesamarres-a1817-default-rtdb.firebaseio.com",
    projectId: "larguezlesamarres-a1817",
    storageBucket: "larguezlesamarres-a1817.appspot.com",
    messagingSenderId: "907895696510",
    appId: "1:907895696510:web:769041d46012e5884e7c2f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let jsonParser = bodyParser.json()
const { MeiliSearch } = require('meilisearch')

const client = new MeiliSearch({
    host: 'http://159.65.53.78'
})

router.post('/book',jsonParser, async (req, res) => {

    const random = (min, max) => {
        return Math.round(Math.random() * (max - min) + min).toString();
    }
    const id = random(99999, 999999999999999999)

    const bookingsRef = collection(db, "bookings");
    await setDoc(doc(bookingsRef, id), {
        key:id,
        offerId:req.body.offerId,
        tenantId:req.body.tenantId,
        ownerId:req.body.ownerId,
        state:req.body.state,
        createdAt:serverTimestamp()
    }, {
        merge: true
    }).then(() => {});
})



module.exports.router = router;