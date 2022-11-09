import { ReactNode } from 'react';
import type { MenuOption } from '../user-interface';
declare type SubMenuProps = {
    label: ReactNode;
    chosenItemId?: string;
    menuOptions?: MenuOption[];
    onChooseItem?: (itemId: string) => void;
    onGoBack: () => void;
    dataTestId: string;
};
export declare function SubMenu({ label, chosenItemId, menuOptions, onChooseItem, onGoBack, dataTestId }: SubMenuProps): JSX.Element;
export {};
//# sourceMappingURL=sub-menu.d.ts.map