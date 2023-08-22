import {ipotecService} from "./ipotec.service";

class IpotecController {
    async calculate(req, res, next) {
        try {
            const {creditBalance, rate, periods} = req.query;
            if (!creditBalance || !rate || !periods) {
                throw new Error(`calculate request at ${Date.now()}. Query: ${JSON.stringify(req.query)}`)
            }

            const payment = ipotecService.calculate({creditBalance, rate, periods})

            return res.status(200).json({payment}).end();
        } catch (error) {
            next(error)
        }

    }
}

export const ipotecController = new IpotecController();