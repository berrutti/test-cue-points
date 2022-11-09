import type { PlayerTextTrack } from '../components/player/player.interface';
/**
 * Checks if a subtitle is valid.
 * @param {TextTrack[]} tracks The array with the current subtitles.
 * @param {PlayerTextTrack} subtitle The subtitle to check.
 * @returns {boolean} True when the subtitle is valid and not already included, otherwise false.
 */
export declare function isValidSubtitle(tracks: TextTrack[], subtitle: PlayerTextTrack): boolean;
//# sourceMappingURL=is-valid-subtitle.d.ts.map