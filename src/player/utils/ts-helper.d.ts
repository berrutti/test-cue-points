export declare type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export declare type Writeable<T> = {
    -readonly [P in keyof T]-?: T[P];
};
export interface HashMap<T> {
    [key: string]: T;
}
//# sourceMappingURL=ts-helper.d.ts.map