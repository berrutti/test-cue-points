import type { VideoJsPlayer } from 'video.js';
import type { PlayerOptions } from '../../player.interface';
import type { PlayerSources } from '../../player.config';
import videojs from 'video.js';
export declare function getSources(playerOptions: PlayerOptions, player: VideoJsPlayer): Promise<videojs.Tech.SourceObject[]>;
export declare function getVideoJSSources(sources: PlayerSources, preferredQuality?: string): videojs.Tech.SourceObject[];
//# sourceMappingURL=sources.d.ts.map