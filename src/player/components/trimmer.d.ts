/// <reference types="react" />
import type { Storyboard } from './timeline';
declare type Props = {
    wrapper: HTMLDivElement | null;
    isPlaying: boolean;
    startTime: number;
    endTime: number;
    currentTime: number;
    totalTime: number;
    storyboard?: Storyboard;
    minimumTrimAreaWidth?: number;
    onChange?: (value: number) => void;
    onTrimStartTimeChange?: (newTrimStartTime: number) => void;
    onTrimEndTimeChange?: (newTrimEndTime: number) => void;
};
export declare function Trimmer({ wrapper, isPlaying, startTime, endTime, currentTime, totalTime, storyboard, onChange, onTrimStartTimeChange, onTrimEndTimeChange, }: Props): JSX.Element;
export {};
//# sourceMappingURL=trimmer.d.ts.map