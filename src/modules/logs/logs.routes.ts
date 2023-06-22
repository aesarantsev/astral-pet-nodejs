import express from 'express';

import {logsController} from './logs.controller'

export const logsRouter = express.Router();

logsRouter.get('/errorLogs', logsController.getErrorLogs);
logsRouter.get('/infoLogs', logsController.getInfoLogs);

