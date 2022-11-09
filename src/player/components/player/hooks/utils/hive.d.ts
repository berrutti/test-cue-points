import type { VideoJsPlayer } from 'video.js';
import type { PlayerSources } from '../../player.config';
import type { HivePluginOptions } from '../../player.interface';
import videojs from 'video.js';
export declare function getHiveSources(player: VideoJsPlayer, hiveOptions: HivePluginOptions, sources: PlayerSources, preferredQuality?: string): Promise<videojs.Tech.SourceObject[]>;
//# sourceMappingURL=hive.d.ts.map