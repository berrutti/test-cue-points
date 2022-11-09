import type { i18n } from 'i18next';
import videojs, { VideoJsPlayer } from 'video.js';
import { PlayerOptions } from './player.interface';
declare const VideoJsBridge_base: {
    new (player: VideoJsPlayer, options?: videojs.ComponentOptions | undefined, ready?: videojs.Component.ReadyCallback | undefined): videojs.Component;
    prototype: videojs.Component;
    getComponent(name: "Button" | "button"): {
        new (player: VideoJsPlayer, options?: videojs.ComponentOptions | undefined): videojs.Button;
        prototype: videojs.Button;
    };
    getComponent(name: "ClickableComponent" | "clickablecomponent"): {
        new (player: VideoJsPlayer, options?: videojs.ClickableComponentOptions | undefined): videojs.ClickableComponent;
        prototype: videojs.ClickableComponent;
    };
    getComponent(name: "ModalDialog" | "modaldialog"): {
        new (player: VideoJsPlayer, options?: videojs.ModalDialogOptions | undefined): videojs.ModalDialog;
        prototype: videojs.ModalDialog;
    };
    getComponent(name: "Menu" | "menu"): {
        new (player: VideoJsPlayer, options?: videojs.MenuOptions | undefined): videojs.Menu;
        prototype: videojs.Menu;
    };
    getComponent(name: "MenuButton" | "menubutton"): {
        new (player: VideoJsPlayer, options?: videojs.MenuButtonOptions | undefined): videojs.MenuButton;
        prototype: videojs.MenuButton;
    };
    getComponent(name: "MenuItem" | "menuitem"): {
        new (player: VideoJsPlayer, options?: videojs.MenuItemOptions | undefined): videojs.MenuItem;
        prototype: videojs.MenuItem;
    };
    getComponent(name: "MouseTimeDisplay" | "mouseTimeDisplay"): {
        new (player: VideoJsPlayer, options?: videojs.ComponentOptions | undefined): videojs.MouseTimeDisplay;
        prototype: videojs.MouseTimeDisplay;
    };
    getComponent(name: "Spacer" | "spacer"): {
        new (player: VideoJsPlayer, options?: videojs.ComponentOptions | undefined, ready?: videojs.Component.ReadyCallback | undefined): videojs.Spacer;
        prototype: videojs.Spacer;
    };
    getComponent(name: "Player" | "player"): {
        new (player: VideoJsPlayer, options?: import("video.js").VideoJsPlayerOptions | undefined): VideoJsPlayer;
        prototype: VideoJsPlayer;
        getTagSettings(tag: Element): any;
    };
    getComponent(name: "timeTooltip" | "TimeTooltip"): {
        new (player: VideoJsPlayer, options?: videojs.ComponentOptions | undefined): videojs.TimeToolTip;
        prototype: videojs.TimeToolTip;
    };
    getComponent(name: string): any;
    registerComponent(name: string, ComponentToRegister: any): any;
};
export declare class VideoJsBridge extends VideoJsBridge_base {
    private vjsPlayer;
    private playerOptions;
    private i18nInstance;
    constructor(vjsPlayer: VideoJsPlayer, playerOptions: PlayerOptions, i18nInstance: i18n);
    init(): void;
}
export {};
//# sourceMappingURL=videojs.bridge.d.ts.map