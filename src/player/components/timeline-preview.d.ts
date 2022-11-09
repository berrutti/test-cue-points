import type { MutableRefObject, CSSProperties } from 'react';
import type { Storyboard } from './timeline';
declare type Props = {
    timelineRef: MutableRefObject<HTMLElement | null>;
    totalTime?: number;
    storyboard?: Storyboard;
    style?: CSSProperties;
};
export declare function TimelinePreview({ timelineRef, totalTime, storyboard, style }: Props): JSX.Element | null;
export {};
//# sourceMappingURL=timeline-preview.d.ts.map