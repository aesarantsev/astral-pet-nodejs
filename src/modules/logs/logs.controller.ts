import {filesService} from "../../services/files";

class LogsController {
    private getFile = async (req, res, next, filePath) => {
        try {
            const fileName = filesService.getFileNameFromPath(filePath);
            const stream = await filesService.createFileStream(filePath + '12')

            res.writeHead(200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=" + fileName
            });

            stream.pipe(res);
        } catch (error) {
            next(error)
        }


    }

    getErrorLogs = (req, res, next) => {
        const filePath = process.env.ERROR_LOGS_FILE_PATH || '';

        return this.getFile(req, res, next, filePath)
    }

    getInfoLogs = (req, res, next) => {
        const filePath = process.env.INFO_LOGS_FILE_PATH || '';

        return this.getFile(req, res, next, filePath)
    }
}

export const logsController = new LogsController();