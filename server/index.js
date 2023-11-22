import express from 'express';
import router from './routes/route.js';
import Connection from './database/db.js';
import DefaultUsers from './defaultDataApi.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use('/', router)

Connection();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

DefaultUsers()