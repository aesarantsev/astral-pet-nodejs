import {filesService} from "../../services/files";

class LogsController {
    private getFile = async (req, res, filePath) => {
        try {
            const fileName = filesService.getFileNameFromPath(filePath);
            const stream = await filesService.createFileStream(filePath + '12')

            res.writeHead(200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=" + fileName
            });

            stream.pipe(res);
        } catch (error) {
            console.error(error)
            res.status(400).json({message: (error as Error).message || 'Ошибка загрузки файла'})
        }


    }

    getErrorLogs = (req, res) => {
        const filePath = process.env.ERROR_LOGS_FILE_PATH || '';

        return this.getFile(req, res, filePath)
    }

    getInfoLogs = (req, res) => {
        const filePath = process.env.INFO_LOGS_FILE_PATH || '';

        return this.getFile(req, res, filePath)
    }
}

export const logsController = new LogsController();