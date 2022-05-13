/// <reference types="multer" />
import { Storage } from '@google-cloud/storage';
import { ConfigService } from '@nestjs/config';
import { UploadTypes } from '../shared/types/upload.types';
export declare class GoogleService {
    private readonly configService;
    constructor(configService: ConfigService);
    storage: Storage;
    uploadFile(file: Express.Multer.File, name: string, type: UploadTypes): Promise<string>;
    deleteFile(name: string, type: UploadTypes): Promise<void>;
    private getFolder;
}