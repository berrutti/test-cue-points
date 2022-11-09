import type { PlayerTextTrack } from './player.interface';
export declare type TextTrackType = 'subtitles';
/** https://download.hivestreaming.com/media-player/docs/videojs/docs/7.0.0/classes/techname.html */
export declare type HiveTechName = 'HiveJava' | 'HiveJS' | 'StatsJS';
export declare type PlayerCallback = () => void;
export declare type PlayerTimedMetadataCallback = (event: TimedMetadataEvent) => void;
export interface VideoMetadataConfig {
    videoId?: string;
    title?: string;
}
export interface SettingsConfig {
    /**
     * A hex value for the Player's primary color.
     * For example: #38761d
     * default: empty
     * */
    primaryColor?: string;
    /**
     * The URL for the logo.
     * default: empty
     * */
    logoUrl?: string;
    /**
     * Player adjust its UI based on its dimensions.
     * default: true
     * */
    responsive?: boolean;
    /**
     * Turn on/off autoplay.
     * default: false
     * */
    autoplay?: boolean;
    /**
     * Turn on/off looping of the video.
     * default: false
     * */
    looping?: boolean;
    /**
     * Mute the video.
     * default: false
     * */
    muted?: boolean;
    /**
     * Show or hide the UI for live streams
     * default: false
     * */
    liveUI?: boolean;
    /**
     * Show or hide audio-only waveform animation or the audio-only image.
     *
     * default: false
     * */
    audioOnly?: boolean;
    /**
     * The URL for the audio-only image.
     *
     * If "audioOnly" is enabled, the image will cover the video.
     * If "audioOnly" is enabled and the audioOnlyImageUrl is not set,
     * the default "Wave-Animation" covers the video.
     *
     * default:
     *  The default is a "empty" string.
     * */
    audioOnlyImageUrl?: string;
    /**
     * Player’s volume in the range of 0 (silent) to 1.0 (max volume).
     * default: 0.7
     * */
    volume?: number;
    /**
     * Show the video trimming controls.
     * default: false
     * */
    trimmable?: boolean;
    /**
     * Hide the logo.
     * default: false
     * */
    hideLogo?: boolean;
    /**
     * Hide the title.
     * default: false
     * */
    hideTitle?: boolean;
    /**
     * Hide the play button.
     * default: false
     * */
    hidePlayButton?: boolean;
    /**
     * Hide the timeline.
     * default: false
     * */
    hideTimeline?: boolean;
    /**
     * Hide the volume slider.
     * default: false
     * */
    hideVolumeInput?: boolean;
    /**
     * Hide the timer.
     * default: false
     * */
    hideTimer?: boolean;
    /**
     * Hide the loop button.
     * default: false
     * */
    hideLoopButton?: boolean;
    /**
     * Hide the subtitle button.
     * default: false
     * */
    hideSubtitlesButton?: boolean;
    /**
     * Hide the settings menu.
     * default: false
     * */
    hideMenu?: boolean;
    /**
     * Hide the fullscreen button.
     * default: false
     * */
    hideFullscreenButton?: boolean;
    /**
     * Hide the playback speed button in the settings menu.
     * default: false
     * */
    hidePlaybackSpeed?: boolean;
    /**
     * Hide the steps buttons.
     * default: false
     * */
    stepButtonsAreVisible?: boolean;
    /**
     * Preferred initial quality for
     * progressive sources
     */
    preferredQuality?: string;
}
export interface SourceObject {
    src: string;
    type: SourceType;
}
export interface ProgressiveSources {
    [index: string]: SourceObject[];
}
export interface PlayerSources {
    hls?: SourceObject;
    progressive?: ProgressiveSources;
}
export interface TextTrackConfig {
    id: string;
    kind: TextTrackType;
    srclang: string;
    label: string;
    src: string;
}
export interface PluginsConfig {
    hive?: HivePluginConfig;
    ramp?: RampPluginConfig;
    miJavaAnalytics?: MiJavaAnalyticsConfig;
    youboraAnalytics?: YouboraAnalyticsConfig;
}
export interface MiJavaAnalyticsConfig {
    url: string;
}
/**
 * required:
 *  - accountCode: the account id of the customer
 *  - userName: unique id like a visitor-id, fingerprint
 *
 * defaults:
 * - 'content.customDimension.4': document.location.href
 * - 'content.customDimension.5': to track the referrer
 *
 * example:
 * {
 *   accountCode: '12def322',
 *   username: 'ce223c',
 *   "content.customDimension.1": '12345678
 * }
 *
 * This file is similar to youboralib.YouboraPluginConfig,
 * except some props that we want to hide
 */
export interface YouboraAnalyticsConfig {
    accountCode: string;
    username: string;
    host?: string;
    'content.id'?: string;
    'content.title'?: string;
    'content.channel'?: string;
    'content.customDimension.1'?: string;
    'content.customDimension.2'?: string;
    'content.customDimension.3'?: string;
    'content.customDimension.4'?: string;
    'content.customDimension.5'?: string;
    'content.customDimension.6'?: string;
    'content.customDimension.7'?: string;
    'content.customDimension.8'?: string;
    'content.customDimension.9'?: string;
    'content.customDimension.10'?: string;
    'content.customDimension.11'?: string;
    'content.customDimension.12'?: string;
    'content.customDimension.13'?: string;
    'content.customDimension.14'?: string;
    'content.customDimension.15'?: string;
    'content.customDimension.16'?: string;
    'content.customDimension.17'?: string;
    'content.customDimension.18'?: string;
    'content.customDimension.19'?: string;
    'content.customDimension.20'?: string;
}
export interface RampPluginConfig {
    /** A comma separated list of URIs */
    omnicacheUris?: string;
    /** The Stream Root Key to support P2P technology */
    streamRootKey?: string;
    /** Turn on or off the logging */
    debug?: boolean;
}
export interface HivePluginConfig {
    /** The url of the ticket */
    ticket: string;
    /**
     * Types of distributions
     * default: ['HiveJava', 'StatsJS']
     *
     * HiveJava tech: distributes the video through the Java proxy client, works on every browser but supports only one video at the time.
     * HiveJS tech: distributes the video between browsers using WebRTC, works only on WebRTC Datachannel enabled browsers, supports one video per page.
     * StatsJS tech: no video distribution, only sends telemetry data for Insights analysis but works in every browser.
     *
     * https://download.hivestreaming.com/media-player/docs/videojs/docs/index.html#hivecomm.techs
     * */
    techOrder?: HiveTechName[];
}
export interface PlayerConfig {
    /** The URL for the thumbnail picture. */
    poster?: string;
    /** The sources for the video. HLS and progressive sources are supported. */
    sources: PlayerSources;
    /** Optional metadata for the video. */
    metadata?: VideoMetadataConfig;
    /** Settings to hide / show player buttons, display a custom logo, etc. */
    settings?: SettingsConfig;
    /** An array of subtitles. */
    tracks?: TextTrackConfig[];
    /** Information about the timeline preview images. */
    storyboard?: StoryboardConfig;
    /** Default language for the player. */
    lng?: string;
    /** Player Plugin Configs */
    plugins?: PluginsConfig;
    /** A callback function to be executed when the Player is ready. */
    onReady?: (api: PlayerApi) => void;
}
export interface StoryboardConfig {
    sources: string[];
    interval: number;
    width: number;
    height: number;
    spritesPerRow: number;
}
export interface PlayerApi {
    /**
     * Attempts to begin playback.
     * @throws if playing fails
     */
    play(): Promise<void>;
    /**
     * Pauses playback.
     */
    pause(): void;
    /**
     * Sets the current time of the player.
     * @param {number} time - Time in seconds.
     */
    setCurrentTime(time: number): void;
    /**
     * Returns the current time of the player in seconds.
     * Note: If called immediately after setCurrentTime, the change would not be reflected.
     */
    getCurrentTime(): number;
    /**
     * Sets the current start time for the trimmer.
     * @param {number} milliseconds - The time to be set as start time for the trimmer.
     */
    setTrimStartTime(milliseconds: number): void;
    /**
     * Returns the current start time for the trimmer.
     */
    getTrimStartTime(): number;
    /**
     * Sets the current end time for the trimmer.
     * @param {number} milliseconds - The time to be set as end time for the trimmer.
     */
    setTrimEndTime(milliseconds: number): void;
    /**
     * Returns the current end time for the trimmer.
     */
    getTrimEndTime(): number;
    /**
     * Adds a subtitle to the player.
     * @param {PlayerTextTrack} subtitle - The subtitle track to be added.
     */
    addSubtitle(subtitle: PlayerTextTrack): Promise<void>;
    /**
     * Sets a specific subtitle as selected.
     * @param {string} id - The subtitle's id.
     */
    setSelectedSubtitle(id: string): void;
    /**
     * Removes every subtitle from the player.
     */
    removeSubtitles(): void;
    /**
     * Turns mute on or off.
     */
    setMuted(value: boolean): void;
    /**
     * Returns whether volume is currently muted.
     */
    getMuted(): boolean;
    /**
     * Returns whether playback is currently paused or has yet to play.
     */
    getPaused(): boolean;
    /**
     * Sets the player’s volume in the range of 0 (silent) to 1.0 (max volume). Unmutes a muted player.
     * @param {number} Value between 0 and 1.
     */
    setVolume(value: number): void;
    /**
     * Returns the current volume between 0 and 1.
     */
    getVolume(): number;
    /**
     * Returns if the media has ended. - True indicates that the media has ended. - False indicates that the media has not ended.
     */
    hasEnded(): boolean;
    /**
     * The duration of the media in seconds or 0 if there is no duration.
     */
    getDuration(): number;
    /**
     * Adds an event listener to the player.
     * @param {PlayerEvent} type - The event to bind to.
     * @param {callback} listener - The event listener.
     */
    addEventListener<K extends keyof ListenerEventMap>(type: K, listener: ListenerEventMap[K]): void;
    /**
     * Removes an event listener from the player.
     * @param {PlayerEvent} type - The event to remove the bind from.
     * @param {callback} listener - The event listener to be removed.
     */
    removeEventListener<K extends keyof ListenerEventMap>(type: K, listener: ListenerEventMap[K]): void;
}
export interface TimedMetadataEvent {
    /**
     * CuePoint metadata data.
     */
    metadata: CueData[];
}
/**
 * Specialized Cue-type for data
 * e.g. used in TIMED_METADATA Events
 */
export interface CueData {
    start: number;
    end: number;
    value: string;
}
export declare enum SourceType {
    MP4 = "video/mp4",
    WEBM = "video/webm",
    APPLE_HLS = "application/vnd.apple.mpegurl",
    HLS = "application/x-mpegURL"
}
export declare enum PlayerEvent {
    /**
     * Triggered when the element is no longer paused.
     * Fired after the play() method has returned,
     * or when the autoplay attribute has caused playback to begin.
     */
    PLAY = "play",
    /**
     * Triggered when the element has been paused.
     * Fired after the pause() method has returned.
     */
    PAUSE = "pause",
    /**
     * Triggered when a cue-point was found as part of the playback.
     *
     * Example for consuming the data:
     *
     * function timedMetadataHandler(event: TimedMetadataEvent){
     *   console.log('metadata:', JSON.parse(event.metadata[0]));
     * }
     */
    TIMED_METADATA = "timedmetadata",
    /**
     * Triggered when the current playback position changed
     * as part of normal playback or in an
     * especially interesting way, for example discontinuously.
     */
    TIME_UPDATE = "timeupdate",
    /**
     * Triggered when the seeking IDL attribute changed to false
     * after the current playback position was changed.
     */
    SEEKED = "seeked",
    /**
     * Triggered when the playback has stopped because
     * the end of the media resource was reached.
     */
    ENDED = "ended",
    /**
     * The event is fired when the metadata has been loaded.
     */
    LOADED_METADATA = "loadedmetadata"
}
export interface ListenerEventMap {
    [PlayerEvent.PLAY]: PlayerCallback;
    [PlayerEvent.PAUSE]: PlayerCallback;
    [PlayerEvent.TIMED_METADATA]: PlayerTimedMetadataCallback;
    [PlayerEvent.TIME_UPDATE]: PlayerCallback;
    [PlayerEvent.SEEKED]: PlayerCallback;
    [PlayerEvent.ENDED]: PlayerCallback;
    [PlayerEvent.LOADED_METADATA]: PlayerCallback;
}
//# sourceMappingURL=player.config.d.ts.map