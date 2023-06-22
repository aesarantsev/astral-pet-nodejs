import {logger} from "../../services/logger";

export const logRequestMiddleware = (req, res, next) => {
    logger.info(`Request to ${req.originalUrl} at ${Date.now()}. Query: ${JSON.stringify(req.query || {})}. Body: ${JSON.stringify(req.body || {})}`)

    next();
}