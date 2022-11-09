import type { MutableRefObject } from 'react';
/**
 * Call a callback function when element is resized.
 * @param {MutableRefObject<HTMLElement | null>} elementRef - A React ref to the DOM element that will have ResizeObserver attached to it.
 * @param {Function} callback - A callback function to be called when the element is resized.
 */
export declare function useOnResize(elementRef: MutableRefObject<HTMLElement | null>, callback: () => void): void;
//# sourceMappingURL=use-on-resize.d.ts.map