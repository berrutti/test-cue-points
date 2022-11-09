import type { MutableRefObject } from 'react';
/**
 * Returns numeric DOMRect values of a DOM element. Values are recalculated on resize.
 * @param {MutableRefObject<HTMLElement | null>} elementRefToObserve A React ref to the DOM element that will have ResizeObserver attached to it.
 * @param {MutableRefObject<HTMLElement | null>} elementRefToMeasure A React ref to the DOM element that will be measured (defaults to the element that will be observed).
 * @returns {DOMRectReadOnly} Size and position of the element.
 */
export declare function useDynamicSize(elementRefToObserve: MutableRefObject<HTMLElement | null>, elementRefToMeasure?: MutableRefObject<HTMLElement | null>): DOMRectReadOnly;
//# sourceMappingURL=use-dynamic-size.d.ts.map