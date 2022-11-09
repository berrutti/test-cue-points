import type { MutableRefObject } from 'react';
/**
 * Returns the X and Y coordinates of the cursor being moved over a DOM element.
 * @param {MutableRefObject<HTMLElement | null>} ref A React ref to the DOM element.
 * @param {boolean} [inPercentage=true] Returned value will be in percentage if true.
 * @param {boolean} [clearOnMouseLeave=true] Sets values to zero on mousemeave if true.
 * @returns {[{x: number, y: number}, boolean]} Numeric X and Y coordinates of the cursor,
 * and a boolean indicating that the cursor is moving.
 */
export declare function useCursorPosition(ref: MutableRefObject<HTMLElement | null>, inPercentage?: boolean, clearOnMouseLeave?: boolean): [{
    x: number;
    y: number;
}, boolean];
//# sourceMappingURL=use-cursor-position.d.ts.map