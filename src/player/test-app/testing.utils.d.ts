/**
 * Fetches an .srt file and converts it to an array of objects.
 * @param {string} path Path to the .srt file
 * @returns {Promise<Subtitle[]>} Array of objects with text, start and end properties
 */
export declare function srtToArray(path: string): Promise<Subtitle[]>;
export interface Subtitle {
    text: string;
    startTime: number;
    endTime: number;
}
export declare enum Paths {
    HTMLVideoPage = "/html-video",
    VideoJSPage = "/videojs",
    MinimalPage = "/minimal",
    HLSVODPage = "/hls-vod",
    HLSLivePage = "/hls-live",
    HivePage = "/hive",
    RampPage = "/ramp",
    APIPage = "/api",
    AnalyticsPage = "/analytics",
    ComponentPage = "/component"
}
//# sourceMappingURL=testing.utils.d.ts.map