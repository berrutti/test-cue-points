/**
 * Converts milliseconds to a more human readable time string.
 * @param {number} time Time in milliseconds.
 * @param {boolean} dynamic Whether to dynamically switch between mm:ss and hh:mm:ss formats.
 * @returns {string} Time in mm:ss or hh:mm:ss format.
 * @example
 * getFormattedTime(60000) // '01:00'
 * getFormattedTime(3600000) // '01:00:00'
 */
export declare function getFormattedTime(time?: number, dynamic?: boolean): string;
/**
 * Converts milliseconds to seconds
 * @param {number} ms Time in milliseconds.
 * @returns {number} Time in seconds.
 */
export declare function msToS(ms?: number): number;
/**
 * Converts seconds to milliseconds
 * @param {number} ms Time in seconds.
 * @returns {number} Time in milliseconds.
 */
export declare function sToMs(s?: number): number;
//# sourceMappingURL=time.d.ts.map