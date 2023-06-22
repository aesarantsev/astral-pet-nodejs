import {filesService} from '../../services/files'

class LogsController {
    private getFile = async (req, res, filePath) => {
        const fileExists = await filesService.isFileExists(filePath)

        if (!fileExists) {
            return res.status(404).json({error: 'File not found'})
        }

        const fileData = await filesService.getFileBinary(filePath);

        res.set({
            'Content-Type': 'text/plain',
            'content-disposition': 'attachment;filename=\"data.log\"'
        })

        return res.end(Buffer.from(fileData));
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