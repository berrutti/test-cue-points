import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
/**
 * An extension of the useState hook, to also provide a ref to the value
 * @param {T} initialValue The initial value to save in the state.
 * @returns Returns an array with the ref to the state value, the state value and the setter function.
 */
export declare function useRefState<T>(initialValue: T): [MutableRefObject<T>, T, Dispatch<SetStateAction<T>>];
//# sourceMappingURL=use-ref-state.d.ts.map