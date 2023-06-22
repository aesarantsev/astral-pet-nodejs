class IpotecService {
    /**
     * @description Расчет платежа по ипотеке
     * @param {Object} params.creditBalance - Остаток суммы кредита
     * @param {Object} params.rate - Процентная ставка
     * @param {Object} params.periods - Кол-во месяцев
     */
    calculate(params: { creditBalance: number, rate: number, periods: number }) {
        const {creditBalance, rate, periods} = params

        const mouthRate = rate / (100 * 12);

        return creditBalance * (mouthRate / (1 - Math.pow((1 + mouthRate), -periods)))
    }
}

export const ipotecService = new IpotecService()