import {ipotecService} from "./ipotec.service";
import {logger} from "../../services/logger";

class IpotecController {
    async calculate(req, res) {
        try {
            const {creditBalance, rate, periods} = req.query;
            if (!creditBalance || !rate || !periods) {
                logger.error(`calculate request at ${Date.now()}. Query: ${JSON.stringify(req.query)}`)
                return res.status(400).json({error: 'Fields creditBalance, rate, periods is required'}).end();
            }

            const payment = ipotecService.calculate({creditBalance, rate, periods})

            return res.status(200).json({payment}).end();
        } catch (error) {
            res.status(400).json({message: (error as Error).message || 'Ошибка расчета'})
        }

    }
}

export const ipotecController = new IpotecController();