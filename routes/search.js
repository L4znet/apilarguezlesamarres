/**
 * @swagger
 *
 * tags:
 *   - name: Recherche
 *     description: Le endpoint pour la recherche
 * /search:
 *   post:
 *     tags:
 *     - Recherche
 *     summary: Envoi du message support de l'utilisateur
 *     description: Envoi du message support de l'utilisateur
 *     parameters:
 *         - in: query
 *           name: localizationFilter
 *           schema:
 *             type: string
 *           description: Filtre de localisation
 *         - in: query
 *           name: typeFilter
 *           schema:
 *             type: string
 *           description: Filtre de type de véhicule
 *         - in: query
 *           name: wishFilter
 *           schema:
 *             type: string
 *           description: Filtre de type d'envie
 *         - in: query
 *           name: query
 *           schema:
 *             type: string
 *           description: Les termes de recherches

 *
 */


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
const { MeiliSearch } = require('meilisearch')

const client = new MeiliSearch({
    host: 'http://159.65.53.78'
})

router.post('/',jsonParser, async (req, res) => {
    if(req.body.query){

        let filters = []

        if(req.body.localizationFilter.length > 0){
            filters.push('localization = "' + req.body.localizationFilter +'"')
        }

        if(req.body.typeFilter.length > 0) {
            filters.push('type = "' + req.body.typeFilter +'"')
        }

        if(req.body.typeFilter.length > 0) {
            filters.push('type = "' + req.body.typeFilter +'"')
        }

        if(req.body.wishFilter.length > 0) {
            filters.push('wishs = "' + req.body.wishFilter +'"')
        }

        client.index('id').search(req.body.query, {
            filter: filters
        }).then((results) => {
            res.json(results)
        })
    }
})


module.exports.router = router;