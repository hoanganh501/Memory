import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import route from './routes/web.js';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
route(app);
//mongodb atlats
const CONNECTTION_URL = 'mongodb+srv://lhoanga99:lhoanga99@cluster0.gwygknz.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

      mongoose.connect(CONNECTTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
          app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))
      })
      .catch((error) => {
          console.log("Error connecting to MongoDB:", error);
      });
  
 
