/// <reference types="react" />
export interface Storyboard {
    sources: string[];
    interval: number;
    width: number;
    height: number;
    spritesPerRow: number;
}
declare type Props = {
    currentTime?: number;
    totalTime?: number;
    min?: number;
    max?: number;
    step?: number;
    bufferPercentage?: number;
    liveUI?: boolean;
    isMobile?: boolean;
    storyboard?: Storyboard;
    onChange?: (value: number) => void;
};
export declare function Timeline({ currentTime, totalTime, min, max, step, bufferPercentage, liveUI, isMobile, storyboard, onChange, }: Props): JSX.Element | null;
export {};
//# sourceMappingURL=timeline.d.ts.map