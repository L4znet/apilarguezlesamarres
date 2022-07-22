const express = require('express');
const router = express.Router();

const {auth, storage, fireconf} = require('../firebase')
const { doc, setDoc, getFirestore, deleteDoc } =  require("firebase/firestore");
const {uid} = require('uid')
const bodyParser = require("body-parser");
const {initializeApp} = require("firebase/app");
const {getStorage} = require("firebase/storage");
const {getAuth} = require("firebase/auth");


const app = initializeApp(fireconf());
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
router.get('/', (req, res) => {
  res.json({
      hello:"sfdsfd"
  })
})

router.post('/',jsonParser, async (req, res) => {

    console.log(req.body)




})

module.exports.router = router;