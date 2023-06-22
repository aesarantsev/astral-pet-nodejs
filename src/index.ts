const express = require('express');
require('dotenv').config();

import {logRequestMiddleware} from "./middlewares";

import {ipotecRouter} from './modules/ipotec'
import {logsRouter} from './modules/logs'


const app = express();

const port = 3000;

app.use('/', logRequestMiddleware);
app.use('/ipotec', ipotecRouter)
app.use('/logs', logsRouter)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
