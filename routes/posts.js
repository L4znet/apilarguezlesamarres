/**
 * @swagger
 *
 * tags:
 *   - name: Les offres
 *     description: Les endpoints des offres
 * /posts:
 *   post:
 *     tags:
 *     - Les offres
 *     summary: Ajoute une offre
 *     description: Ajoute une offre
 *     parameters:
 *         - in: query
 *           name: key
 *           required: true
 *           schema:
 *             type: integer
 *           description: L'id de l'offre
 *         - in: query
 *           name: title
 *           required: true
 *           schema:
 *             type: string
 *           description: Le titre de l'offre
 *         - in: query
 *           name: boatName
 *           required: true
 *           schema:
 *             type: string
 *           description: Le nom du bateau
 *         - in: query
 *           name: localization
 *           required: true
 *           schema:
 *             type: string
 *           description: La destination de l'offre
 *         - in: query
 *           name: capacity
 *           required: true
 *           schema:
 *             type: integer
 *           description: La capacité du bateau
 *         - in: query
 *           name: sleeping
 *           required: true
 *           schema:
 *             type: integer
 *           description: Le nombre de couchettes
 *         - in: query
 *           name: cabins
 *           required: true
 *           schema:
 *             type: integer
 *           description: Le nombre de cabines
 *         - in: query
 *           name: detail
 *           required: true
 *           schema:
 *             type: string
 *           description: Le texte de l'offre (la description)
 *         - in: query
 *           name: captain
 *           required: true
 *           schema:
 *             type: boolean
 *           description: Est ce que la présence d'un capitaine est inclu avec l'offre ?
 *         - in: query
 *           name: teams
 *           required: true
 *           schema:
 *             type: boolean
 *           description: Est ce que la présence d'un équipage est inclu avec l'offre ?
 *         - in: query
 *           name: equipments
 *           schema:
 *             type: string
 *           description: Les équipements éventuellement présent sur le bateau
 *         - in: query
 *           name: thumbnail
 *           required: true
 *           schema:
 *             type: string
 *           description: L'image de l'offre
 *         - in: query
 *           name: price
 *           required: true
 *           schema:
 *             type: integer
 *           description: Le prix de l'offre
 *         - in: query
 *           name: type
 *           required: true
 *           schema:
 *             type: string
 *           description: Le type de véhicule
 *         - in: query
 *           name: wishs
 *           required: true
 *           schema:
 *             type: array
 *           description: Les choses en plus que propose le propriétaire (les envies)
 *         - in: query
 *           name: pricePer
 *           required: true
 *           schema:
 *             type: string
 *           description: La fréquence de calcule du prix (par semaine, par mois)
 *         - in: query
 *           name: authorId
 *           required: true
 *           schema:
 *             type: integer
 *           description: L'id de l'auteur de l'offre (le propriétaire qui poste l'offre)
 *   put:
 *     tags:
 *     - Les offres
 *     summary: Pour modifier une offre
 *     description: Pour modifier une offre
 *     parameters:
 *         - in: query
 *           name: title
 *           required: true
 *           schema:
 *             type: string
 *           description: Le titre de l'offre
 *         - in: query
 *           name: boatName
 *           required: true
 *           schema:
 *             type: string
 *           description: Le nom du bateau
 *         - in: query
 *           name: localization
 *           required: true
 *           schema:
 *             type: string
 *           description: La destination de l'offre
 *         - in: query
 *           name: capacity
 *           required: true
 *           schema:
 *             type: integer
 *           description: La capacité du bateau
 *         - in: query
 *           name: sleeping
 *           required: true
 *           schema:
 *             type: integer
 *           description: Le nombre de couchettes
 *         - in: query
 *           name: cabins
 *           required: true
 *           schema:
 *             type: integer
 *           description: Le nombre de cabines
 *         - in: query
 *           name: detail
 *           required: true
 *           schema:
 *             type: string
 *           description: Le texte de l'offre (la description)
 *         - in: query
 *           name: captain
 *           required: true
 *           schema:
 *             type: boolean
 *           description: Est ce que la présence d'un capitaine est inclu avec l'offre ?
 *         - in: query
 *           name: teams
 *           required: true
 *           schema:
 *             type: boolean
 *           description: Est ce que la présence d'un équipage est inclu avec l'offre ?
 *         - in: query
 *           name: equipments
 *           schema:
 *             type: string
 *           description: Les équipements éventuellement présent sur le bateau
 *         - in: query
 *           name: thumbnail
 *           required: true
 *           schema:
 *             type: string
 *           description: L'image de l'offre
 *         - in: query
 *           name: price
 *           required: true
 *           schema:
 *             type: integer
 *           description: Le prix de l'offre
 *         - in: query
 *           name: type
 *           required: true
 *           schema:
 *             type: string
 *           description: Le type de véhicule
 *         - in: query
 *           name: wishs
 *           required: true
 *           schema:
 *             type: array
 *           description: Les choses en plus que propose le propriétaire (les envies)
 *         - in: query
 *           name: pricePer
 *           required: true
 *           schema:
 *             type: string
 *           description: La fréquence de calcule du prix (par semaine, par mois)
 *   get:
 *     tags:
 *     - Les offres
 *     summary: Pour récupérer les 5 dernières offres
 *     description: Pour récupérer les 5 dernières offres
 * /posts/{offerId}:
 *  delete:
 *     tags:
 *     - Les offres
 *     summary: Pour supprimer une offre
 *     description: Pour supprimer une offre
 *     parameters:
 *         - in: query
 *           name: offerId
 *           required: true
 *           schema:
 *             type: integer
 *           description: L'id de l'offre à supprimer
 * /posts/{userId}/posts:
 *  get:
 *     tags:
 *     - Les offres
 *     summary: Pour récupérer les offres postés par l'utilisateur
 *     description: Pour récupérer les offres postés par l'utilisateur
 *     parameters:
 *         - in: query
 *           name: userId
 *           required: true
 *           schema:
 *             type: integer
 *           description: L'id de l'utilisateur
 */



const express = require('express');
const router = express.Router();
const {collection, setDoc, doc, getDoc, query, getDocs, getFirestore, deleteDoc, serverTimestamp, orderBy, limit, where, updateDoc} = require("firebase/firestore");
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
        req.body.price !== "" &&
        req.body.type !== "" &&
        req.body.authorId !== ""
    ) {

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
            type:req.body.type,
            wishs:req.body.wishs,
            pricePer:req.body.pricePer,
            authorId:req.body.authorId,
            createdAt:serverTimestamp()
        }, {
            merge: true
        }).then(() => {});

    }


})

router.put('/',jsonParser, async (req, res) => {
    const postRef = doc(db, "posts", req.body.offerId);
    await updateDoc(postRef, {
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
        type:req.body.type,
        wishs:req.body.wishs,
        pricePer:req.body.pricePer,
    });
})

router.delete('/:offerId',jsonParser, async (req, res) => {
    await deleteDoc(doc(db, "posts", req.params.offerId));
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

router.get('/:userId/posts',jsonParser, async (req, res) => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("authorId", "==", req.params.userId));
    let offers = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        offers.push(doc.data())
    });

    res.send(offers)

})

module.exports.router = router;