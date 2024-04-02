import { createExpressServer } from 'routing-controllers';
import { SearchController } from "./controller/SearchController"
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import { AppDataSource } from './db/data-source';
const PORT: number = 8000;

const app = createExpressServer({
    controllers: [SearchController], // we specify controllers we want to use
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "secret", saveUninitialized: false, resave: false }));

try {
    const connected = AppDataSource.initialize();
    if (connected) console.log("Database connected");
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});




