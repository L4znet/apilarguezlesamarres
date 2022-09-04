/**
 * @swagger
 *
 * tags:
 *   - name: Support
 *     description: Le endpoint du support technique
 * /support:
 *   post:
 *     tags:
 *     - Support
 *     summary: Envoi du message support de l'utilisateur
 *     description: Envoi du message support de l'utilisateur
 *     parameters:
 *         - in: query
 *           name: fromEmail
 *           required: true
 *           schema:
 *             type: string
 *           description: E-mail de l'utilisateur
 *         - in: query
 *           name: message
 *           required: true
 *           schema:
 *             type: string
 *           description: Message de l'utilisateur
 *         - in: query
 *           name: message
 *           required: true
 *           schema:
 *             type: string
 *           description: Message de l'utilisateur
 *         - in: query
 *           name: displayname
 *           required: true
 *           schema:
 *             type: string
 *           description: Pseudo de l'utilisateur utilisé sur l'application
 *         - in: query
 *           name: userId
 *           required: true
 *           schema:
 *             type: integer
 *           description: Id de l'utilisateur
 *
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
const { validator, oneOf, check} = require('express-validator');

const nodemailer = require('nodemailer');
const transporter = require("nodemailer/lib/mailer");


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

router.post('/', jsonParser, async (req, res) => {

    if (req.body.fromEmail !== "" && req.body.message !== "" && req.body.displayname !== "" && req.body.userId !== "") {

        if(validateEmail(req.body.fromEmail)){

            const transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "13757426b334e7",
                    pass: "31e1688e92f2ab"
                }
            });


            let message = {
                from: req.body.fromEmail,
                to: "charly.escalona1@gmail.com",
                subject: "Demande de support - " + req.body.displayname,
                text: "ID de l'utilisateur : " + req.body.userId + "\n Nom prénom de l'utilisateur : " + req.body.displayname + "\n Message : " + req.body.message
            }
            transport.sendMail(message)
        }
    }
})

module.exports.router = router;