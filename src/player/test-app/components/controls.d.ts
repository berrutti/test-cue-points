/// <reference types="react" />
declare type Props = {
    isPlaying: boolean;
    logoUrl: string;
    title: string;
    currentTime: number;
    totalTime: number;
    bufferPercentage: number;
    stepButtonsAreVisible: boolean;
    isLooping: boolean;
    volume: number;
    isFullscreen: boolean;
    liveUI: boolean;
    audioOnly: boolean;
    audioOnlyImageUrl: string;
    subtitlesEnabled: boolean;
    customPrimaryColor: string;
    isMobile: boolean;
    uiToggles: {
        [key: string]: boolean;
    };
    isTrimmable: boolean;
    onAudioOnlyImageUrlChange: (value: string) => void;
    onPlayButtonClick: () => void;
    onLogoUrlChange: (value: string) => void;
    onTitleChange: (value: string) => void;
    onCurrentTimeChange: (value: number) => void;
    onBufferPercentageChange: (value: number) => void;
    onChangeStepButtonsVisibility: (value: boolean) => void;
    onLoopButtonClick: () => void;
    onVolumeChange: (value: number) => void;
    onFullscreenButtonClick: () => void;
    onLiveButtonClick: () => void;
    onAudioOnlyClick: () => void;
    onSubtitlesButtonClick: () => void;
    onCustomPrimaryColorChange: (value: string) => void;
    onMobileButtonClick: () => void;
    onUiToggleChange: (name: string) => void;
    onTrimmableButtonClick: () => void;
};
export declare function Controls({ isPlaying, logoUrl, title, currentTime, totalTime, bufferPercentage, stepButtonsAreVisible, isLooping, volume, isFullscreen, liveUI, audioOnly, audioOnlyImageUrl, subtitlesEnabled, customPrimaryColor, isMobile, uiToggles, isTrimmable, onAudioOnlyImageUrlChange, onPlayButtonClick, onLogoUrlChange, onTitleChange, onCurrentTimeChange, onBufferPercentageChange, onChangeStepButtonsVisibility, onLoopButtonClick, onVolumeChange, onFullscreenButtonClick, onLiveButtonClick, onAudioOnlyClick, onSubtitlesButtonClick, onCustomPrimaryColorChange, onMobileButtonClick, onUiToggleChange, onTrimmableButtonClick, }: Props): JSX.Element;
export {};
//# sourceMappingURL=controls.d.ts.map