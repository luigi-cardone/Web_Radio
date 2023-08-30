/* Modules */
import express from "express";
import cors from "cors"
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import corsOptions from "./config/corsOptions.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
app.use(express.json())
// app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname + "/public")))
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(process.env.PORT || 8000, ()=>{
  console.log("Backend started")
})