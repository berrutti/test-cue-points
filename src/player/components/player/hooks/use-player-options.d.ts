import type { PlayerConfig } from '../player.config';
import type { HiveSession, PlayerOptions } from '../player.interface';
export declare function usePlayerOptions(config: PlayerConfig): PlayerOptions;
declare global {
    interface Window {
        hiveRenderStatsCallback?: (stats: unknown) => void;
        hiveOnActiveSession?: (session: HiveSession) => void;
        hiveOnErrorCallback?: (error: unknown) => void;
    }
}
//# sourceMappingURL=use-player-options.d.ts.map