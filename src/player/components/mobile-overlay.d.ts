/// <reference types="react" />
declare type Props = {
    isPlaying?: boolean;
    liveUI?: boolean;
    isHidden?: boolean;
    doubleClickDelay?: number;
    onPlayClick?: () => void;
    onBackButtonClick?: () => void;
    onForwardButtonClick?: () => void;
};
export declare function MobileOverlay({ isPlaying, liveUI, isHidden, doubleClickDelay, onPlayClick, onBackButtonClick, onForwardButtonClick, }: Props): JSX.Element;
export {};
//# sourceMappingURL=mobile-overlay.d.ts.map