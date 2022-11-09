import { HiveTechName, PlayerApi, PlayerSources, TextTrackType } from './player.config';
import { Storyboard } from '../timeline';
import { YouboraPluginConfig } from 'youboralib';
/** https://download.hivestreaming.com/media-player/docs/html5/docs/8.0.0/classes/hivesession.html */
export declare type HiveSession = {
    id: string;
    manifest: string;
    tech: string;
    ticketUrl: string;
};
export interface VideoMetadata {
    videoId: string;
    title: string;
}
export interface PlayerSettings {
    primaryColor: string;
    logoUrl: string;
    responsive: boolean;
    autoplay: boolean;
    looping: boolean;
    muted: boolean;
    liveUI: boolean;
    audioOnly: boolean;
    audioOnlyImageUrl: string;
    volume: number;
    trimmable: boolean;
    hideLogo: boolean;
    hideTitle: boolean;
    hidePlayButton: boolean;
    hideTimeline: boolean;
    hideVolumeInput: boolean;
    hideTimer: boolean;
    hideLoopButton: boolean;
    hideMenu: boolean;
    hideFullscreenButton: boolean;
    hidePlaybackSpeed: boolean;
    stepButtonsAreVisible: boolean;
    preferredQuality?: string;
}
export interface PlayerTextTrack {
    id: string;
    kind: TextTrackType;
    srclang: string;
    label: string;
    src: string;
}
export interface Plugins {
    hive?: HivePluginOptions;
    ramp?: RampPluginOptions;
    miJavaAnalytics?: MiJavaAnalyticsOptions;
    youboraAnalytics?: YouboraPluginConfig;
}
export interface MiJavaAnalyticsOptions {
    url: string;
}
/**  https://download.hivestreaming.com/media-player/docs/videojs/docs/7.0.0/classes/options.html */
export interface HivePluginOptions {
    ticket: string;
    techOrder?: HiveTechName[];
    debugLevel?: 'off' | 'error' | 'warn' | 'notice' | 'info' | 'debug';
    HiveJS?: {
        renderStatsCallback?: (stats: unknown) => void;
        onActiveSession?: (session: HiveSession) => void;
        onError?: (error: unknown) => void;
    };
}
export interface HivePlugin {
    initSession: (ticket: string) => Promise<HiveSession>;
    createXMLHttpRequest: () => unknown;
}
export interface RampPluginOptions {
    omnicacheUris?: string;
    streamRootKey?: string;
    debug: boolean;
}
export interface PlayerOptions {
    sources: PlayerSources;
    metadata: VideoMetadata;
    settings: PlayerSettings;
    tracks: PlayerTextTrack[];
    storyboard?: Storyboard;
    poster?: string;
    lng?: string;
    plugins: Plugins;
    onReady?: (api: PlayerApi) => void;
}
//# sourceMappingURL=player.interface.d.ts.map