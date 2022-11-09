export declare enum ErrorCode {
    PLAYER_ERR_NOT_VALID = "PLAYER_ERR_NOT_VALID",
    PLAYER_ERR_NOT_SUPPORTED = "PLAYER_ERR_NOT_SUPPORTED",
    PLAYER_ERR_EVENT_NOT_SUPPORTED = "PLAYER_ERR_EVENT_NOT_SUPPORTED",
    UNKNOWN = "UNKNOWN",
    MEDIA_ERR_CUSTOM = "MEDIA_ERR_CUSTOM",
    MEDIA_ERR_ABORTED = "MEDIA_ERR_ABORTED",
    MEDIA_ERR_NETWORK = "MEDIA_ERR_NETWORK",
    MEDIA_ERR_DECODE = "MEDIA_ERR_DECODE",
    MEDIA_ERR_SRC_NOT_SUPPORTED = "MEDIA_ERR_SRC_NOT_SUPPORTED",
    MEDIA_ERR_ENCRYPTED = "MEDIA_ERR_ENCRYPTED",
    MEDIA_ERR_UNKNOWN = "MEDIA_ERR_UNKNOWN"
}
export declare const getErrorData: (errorCode: ErrorCode) => {
    label: string;
    canReloadSources: boolean;
};
export declare function getErrorCode(error: MediaError): ErrorCode;
export declare class PlayerError extends Error {
    code: ErrorCode;
    constructor(code: ErrorCode, message?: string);
}
//# sourceMappingURL=player-errors.d.ts.map