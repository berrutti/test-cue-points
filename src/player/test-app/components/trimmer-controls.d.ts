/// <reference types="react" />
declare type Props = {
    trimStartTime: number;
    trimEndTime: number;
    totalTime: number;
    onTrimStartTimeChange: (newTrimStartTime: number) => void;
    onTrimEndTimeChange: (newTrimEndTime: number) => void;
};
export declare function TrimmerControls({ trimStartTime, trimEndTime, totalTime, onTrimStartTimeChange, onTrimEndTimeChange, }: Props): JSX.Element;
export {};
//# sourceMappingURL=trimmer-controls.d.ts.map