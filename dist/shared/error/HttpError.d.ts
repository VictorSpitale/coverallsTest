export declare enum HttpErrorCode {
    JWT_FAILED = 0,
    UNAUTHORIZED_LOGIN = 1,
    G_AUTH_FAILED = 2,
    USER_ALREADY_EXIST = 3
}
declare type HttpErrorObj = {
    statusCode: number;
    message: string;
    code: number;
};
export declare class HttpError {
    private static errors;
    static getHttpError(code: HttpErrorCode): HttpErrorObj;
}
export {};
