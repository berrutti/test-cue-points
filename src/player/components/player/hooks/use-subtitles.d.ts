import videojs, { VideoJsPlayer } from 'video.js';
export interface Subtitle {
    text: string;
}
export declare function useSubtitles(player: VideoJsPlayer, trackOptions: videojs.TextTrackOptions[], selectedSubtitleId: string, enabled: boolean): Subtitle | null;
//# sourceMappingURL=use-subtitles.d.ts.map