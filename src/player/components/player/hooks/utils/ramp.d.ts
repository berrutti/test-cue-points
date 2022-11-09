/// <reference types="typings/rampapi" />
import type { VideoJsPlayer } from 'video.js';
import type { PlayerSources } from '../../player.config';
import type { RampPluginOptions } from '../../player.interface';
import videojs from 'video.js';
export declare function getRampSources(player: VideoJsPlayer, rampOptions: RampPluginOptions, fallbackSources: PlayerSources, preferredQuality?: string): Promise<videojs.Tech.SourceObject[]>;
export declare function initializeRamp(): void;
//# sourceMappingURL=ramp.d.ts.map