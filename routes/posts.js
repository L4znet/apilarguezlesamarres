const express = require('express');
const router = express.Router();


const {collection, setDoc, doc, getDatabase, query, getDocs, getFirestore, serverTimestamp, orderBy, limit  } = require("firebase/firestore");
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

router.post('/',jsonParser, async (req, res) => {

    if(
        req.body.title !== "" &&
        req.body.boatName !== "" &&
        req.body.localization !== "" &&
        req.body.capacity !== "" &&
        req.body.sleeping !== "" &&
        req.body.cabins !== "" &&
        req.body.detail !== "" &&
        req.body.thumbnail !== "" &&
        req.body.pricePer !== "" &&
        req.body.price !== ""
    ) {
        let createdAt = Date.now()

        const random = (min, max) => {
            return Math.round(Math.random() * (max - min) + min).toString();
        }
        const id = random(99999, 999999999999999999)


        const postsRef = collection(db, "posts");
        await setDoc(doc(postsRef, id), {
            key:id,
            title: req.body.title,
            boatName: req.body.boatName,
            localization: req.body.localization,
            capacity: req.body.capacity,
            sleeping: req.body.sleeping,
            cabins: req.body.cabins,
            detail: req.body.detail,
            captain:req.body.captain,
            teams:req.body.teams,
            equipments:req.body.equipments,
            thumbnail:req.body.thumbnail,
            price:req.body.price,
            pricePer:req.body.pricePer,
            createdAt:serverTimestamp()
        }, {
            merge: true
        }).then(() => {});

    }


})

router.get('/',jsonParser, async (req, res) => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(5));

    let offers = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        offers.push(doc.data())

    });

    res.send(offers)

})

module.exports.router = router;