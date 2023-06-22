import fs from "fs/promises";

class FilesService {
    async isFileExists(filePath: string) {
        try {
            await fs.access(filePath);
            return true;
        } catch {
            return false
        }
    }

    async getFileBinary(filePath: string) {
        return fs.readFile(filePath)
    }
}

export const filesService = new FilesService();