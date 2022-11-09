/// <reference types="react" />
import type { Storyboard } from './timeline';
export declare const AutoQualityId = "auto";
export declare type MenuOption = {
    id: string;
    label: string;
    languageCode?: string;
};
export declare type QualityLevelOption = {
    id: string;
    height: number;
};
export interface SubtitleOption {
    id: string;
    englishLabel: string;
    languageCode: string;
}
declare type Props = {
    isMobile?: boolean;
    isPlaying?: boolean;
    isStopped?: boolean;
    logoUrl?: string;
    title?: string;
    currentTime?: number;
    totalTime?: number;
    bufferPercentage?: number;
    stepButtonsAreVisible?: boolean;
    isLooping?: boolean;
    volume?: number;
    isFullscreen?: boolean;
    liveUI?: boolean;
    audioOnly?: boolean;
    audioOnlyImageUrl?: string;
    subtitlesEnabled?: boolean;
    subtitle?: string;
    customPrimaryColor?: string;
    subtitleOptionId?: string;
    subtitleOptions?: SubtitleOption[];
    qualityId?: string;
    qualities?: QualityLevelOption[];
    autoQualityOptionAvailable?: boolean;
    playbackSpeedId?: string;
    playbackSpeeds?: MenuOption[];
    storyboard?: Storyboard;
    isTrimmable?: boolean;
    trimStartTime?: number;
    trimEndTime?: number;
    muted?: boolean;
    hideLogo?: boolean;
    hideTitle?: boolean;
    hidePlayButton?: boolean;
    hideTimeline?: boolean;
    hideVolumeInput?: boolean;
    hideTimer?: boolean;
    hideLoopButton?: boolean;
    hideSubtitlesButton?: boolean;
    hideMenu?: boolean;
    hideFullscreenButton?: boolean;
    hidePlaybackSpeed?: boolean;
    onPlayButtonClick?: () => void;
    onTimelineDrag?: (value: number) => void;
    onBackButtonClick?: () => void;
    onForwardButtonClick?: () => void;
    onLoopButtonClick?: () => void;
    onVolumeChange?: (value: number) => void;
    onToggleMute?: (value: boolean) => void;
    onFullscreenButtonClick?: () => void;
    onSubtitlesButtonClick?: () => void;
    onSetSubtitle?: (subtitleId: string) => void;
    onSetQuality?: (qualityId: string) => void;
    onSetPlaybackSpeed?: (playbackSpeedId: string) => void;
    onTrimStartTimeChange?: (newTrimStartTime: number) => void;
    onTrimEndTimeChange?: (newTrimEndTime: number) => void;
};
export declare function UserInterface({ isMobile, isPlaying, isStopped, logoUrl, title, currentTime, totalTime, bufferPercentage, stepButtonsAreVisible, isLooping, volume, isFullscreen, liveUI, audioOnly, audioOnlyImageUrl, subtitlesEnabled, subtitle, customPrimaryColor, subtitleOptionId, subtitleOptions, qualityId, qualities, autoQualityOptionAvailable, playbackSpeedId, playbackSpeeds, storyboard, isTrimmable, trimStartTime, trimEndTime, muted, hideLogo, hideTitle, hidePlayButton, hideTimeline, hideVolumeInput, hideTimer, hideLoopButton, hideSubtitlesButton, hideMenu, hideFullscreenButton, hidePlaybackSpeed, onPlayButtonClick, onTimelineDrag, onBackButtonClick, onForwardButtonClick, onLoopButtonClick, onVolumeChange, onToggleMute, onFullscreenButtonClick, onSubtitlesButtonClick, onSetSubtitle, onSetQuality, onSetPlaybackSpeed, onTrimStartTimeChange, onTrimEndTimeChange, }: Props): JSX.Element;
export {};
//# sourceMappingURL=user-interface.d.ts.map