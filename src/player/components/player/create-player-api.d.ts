import type { Dispatch, SetStateAction } from 'react';
import type { VideoJsPlayer } from 'video.js';
import type { PlayerApi } from './player.config';
import type { PlayerTextTrack } from './player.interface';
declare type Props = {
    setTextTracks: Dispatch<SetStateAction<PlayerTextTrack[]>>;
    setStartTime: Dispatch<SetStateAction<number>>;
    setEndTime: Dispatch<SetStateAction<number>>;
    getTrimStartTime: () => number;
    getTrimEndTime: () => number;
    handleSubtitleSelection: (subtitleId: string) => void;
    options: {
        defaultVolume: number;
    };
};
export declare function createPlayerApi(player: VideoJsPlayer, props: Props): PlayerApi;
export {};
//# sourceMappingURL=create-player-api.d.ts.map