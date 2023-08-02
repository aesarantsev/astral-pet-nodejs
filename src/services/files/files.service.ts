import {access} from "fs/promises";
import {createReadStream} from 'fs'
import path from "path";

class FilesService {
    async isFileExists(filePath: string) {
        try {
            await access(filePath);
            return true;
        } catch {
            return false
        }
    }


    async createFileStream(filePath: string) {
        const fileExists = await this.isFileExists(filePath)

        if (!fileExists) {
            throw new Error('Запрашиваемый файл не существует')
        }

        return createReadStream(filePath)
    }

    getFileNameFromPath(filePath: string) {
        return path.basename(filePath)
    }
}

export const filesService = new FilesService();