import { i18n, TFunction } from 'i18next';
import { MenuOption, QualityLevelOption, SubtitleOption } from '../user-interface';
export declare function getQualityMenuOption(t: TFunction<'translation', undefined>, qualityOption: QualityLevelOption | undefined): MenuOption;
export declare function getQualityMenuOptions(t: TFunction<'translation', undefined>, qualities: QualityLevelOption[], autoQualityOptionAvailable?: boolean): MenuOption[];
export declare function getSubtitleMenuOption(t: TFunction<'translation', undefined>, i18n: i18n, subtitleOption: SubtitleOption | undefined, subtitlesEnabled: boolean | undefined): MenuOption;
export declare function getSubtitleMenuOptions(t: TFunction<'translation', undefined>, i18n: i18n, items: SubtitleOption[]): MenuOption[];
export declare function getSubtitleTranslations(t: TFunction<'translation', undefined>, i18n: i18n, item: SubtitleOption): {
    label: string;
    languageCode: string | undefined;
};
//# sourceMappingURL=settings-menu.utils.d.ts.map