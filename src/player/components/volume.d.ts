/// <reference types="react" />
declare type Props = {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    muted?: boolean;
    className?: string;
    onChange?: (value: number) => void;
    onToggleMute?: (value: boolean) => void;
};
export declare function Volume({ min, max, step, value, muted, onChange, onToggleMute, className, }: Props): JSX.Element | null;
export {};
//# sourceMappingURL=volume.d.ts.map