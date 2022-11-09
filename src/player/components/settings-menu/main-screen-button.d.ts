/// <reference types="react" />
import type { MenuOption } from '../user-interface';
import type { Submenu } from './settings-menu.types';
declare type MainScreenButtonProps = {
    label: string;
    goTo: Submenu;
    menuOption: MenuOption;
    hasSubMenu: boolean;
    tabIndex?: number;
    onClick: (submenu: Submenu) => void;
};
export declare function MainScreenButton({ goTo, label, menuOption, tabIndex, onClick, hasSubMenu }: MainScreenButtonProps): JSX.Element;
export {};
//# sourceMappingURL=main-screen-button.d.ts.map