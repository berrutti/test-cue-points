import type { MutableRefObject } from 'react';
import type { MenuOption, QualityLevelOption, SubtitleOption } from '../user-interface';
declare type Props = {
    isOpen?: boolean;
    chosenSubtitleId?: string;
    subtitles?: SubtitleOption[];
    subtitlesEnabled?: boolean;
    chosenQualityId?: string;
    qualities?: QualityLevelOption[];
    autoQualityOptionAvailable?: boolean;
    chosenPlaybackSpeedId?: string;
    playbackSpeeds?: MenuOption[];
    playerWrapperRef: MutableRefObject<HTMLElement | null>;
    hidePlaybackSpeed?: boolean;
    onSetSubtitle?: (subtitleId: string) => void;
    onSetQuality?: (qualityId: string) => void;
    onSetPlaybackSpeed?: (playbackSpeedId: string) => void;
    onClose: () => void;
};
export declare function SettingsMenu({ isOpen, chosenSubtitleId, subtitles, subtitlesEnabled, chosenQualityId, qualities, autoQualityOptionAvailable, chosenPlaybackSpeedId, playbackSpeeds, playerWrapperRef, hidePlaybackSpeed, onSetSubtitle, onSetQuality, onSetPlaybackSpeed, onClose, }: Props): JSX.Element;
export {};
//# sourceMappingURL=settings-menu.d.ts.map