//Configuração do firestore
import privateKey from './config/privateKey.json'
const admin = require("firebase-admin");

const serviceAccount = privateKey

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

import * as functions from "firebase-functions"
import express from "express"
import routes from './routes'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(routes)

app.use((_req, res, _next) => {
  return res.status(404).json({ error: 'Página não encontrada' });
})

exports.app = functions.https.onRequest(app)