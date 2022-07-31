//Configuração com o firestore
import privateKey from './config/privateKey.json'
const admin = require("firebase-admin");

const serviceAccount = privateKey

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

import * as functions from "firebase-functions"
import express from "express"
import routes from './routes'


const app = express()

app.use(routes)

exports.app = functions.https.onRequest(app)