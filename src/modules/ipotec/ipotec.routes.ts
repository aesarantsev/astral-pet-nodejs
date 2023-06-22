import express from 'express';

import {ipotecController} from './ipotec.controller'

export const ipotecRouter = express.Router();

ipotecRouter.get('/calculate', ipotecController.calculate);