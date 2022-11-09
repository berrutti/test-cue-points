import type { MutableRefObject } from 'react';
/**
 * Returns a boolean of whether a mouse is being moved over a DOM element.
 * The return value is set to `false` when the mouse is not being moved for `mouseStopDelay` number of seconds.
 * @param ref A React ref to the DOM element.
 * @param mouseStopDelay The number of seconds to wait before setting the return value to `false`.
 * @returns A boolean of whether a mouse is being moved over the DOM element.
 */
export declare function useMouseMoving(ref: MutableRefObject<HTMLElement | null>, mouseStopDelay?: number): boolean;
//# sourceMappingURL=use-mouse-moving.d.ts.map