// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Route from './routes/routes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Route);

Connection();

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
