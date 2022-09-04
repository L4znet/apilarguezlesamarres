/**
 * @swagger
 *
 * tags:
 *   - name: Les réservations
 *     description: Les endpoints des réservations
 * /ask:
 *   post:
 *     tags:
 *     - Les réservations
 *     summary: Enregistre une proposition de réservation
 *     description: Enregistre une proposition de réservation
 * /booked/{id}:
 *   post:
 *     tags:
 *     - Les réservations
 *     summary: Récupère les réservations d'un propriétaire
 *     description: Récupère les réservations d'un propriétaire
 *     parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *             minimum: 1
 *           description: L'id de l'offre
 * /itemstobook/{tenant_id}:
 *   post:
 *     tags:
 *     - Les réservations
 *     summary: Récupère les réservations émise par un locataire
 *     description: Récupère les réservations émise par un locataire
 *     parameters:
 *         - in: path
 *           name: tenant_id
 *           required: true
 *           schema:
 *             type: integer
 *             minimum: 1
 *           description: L'id du locataire
 *
 */


const express = require('express');
const router = express.Router();

const {collection,document, addDoc, doc, getDatabase, query, getDocs, getFirestore, serverTimestamp, orderBy, limit, getDoc, where,
    setDoc
} = require("firebase/firestore");
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

router.post('/ask',jsonParser, async (req, res) => {

    const bookingRef = collection(db, "posts/" + req.body.offerId + "/bookings");

    await setDoc(doc(bookingRef, req.body.id), {
        id:req.body.id,
        offerId:req.body.offerId,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        state: req.body.state,
        tenantId: req.body.tenantId,
        tenantName: req.body.tenantName,
        ownerId: req.body.ownerId,
        createdAt: serverTimestamp()
    }, {
        merge: true
    }).then(() => {});

})

router.get('/booked/:offerId',jsonParser, async (req, res) => {

    const bookingsRef = collection(db, "bookings");
    const q = query(bookingsRef, where("offerId", "==", req.params.offerId));
    const querySnapshot = await getDocs(q);
    let bookedItem = []
    querySnapshot.forEach((doc) => {
        bookedItem.push(doc.data())
    });
    res.send(bookedItem)
})

router.get('/itemstobook/:tenantId',jsonParser, async (req, res) => {
    const bookingsRef = collection(db, "bookings");
    const q = query(bookingsRef, where("tenantId", "==", req.params.tenantId));
    const querySnapshot = await getDocs(q);

    let itemToBook = []
    querySnapshot.forEach((doc) => {
    });

})


module.exports.router = router;