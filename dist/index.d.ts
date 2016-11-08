export declare function isUndefined(v: any): boolean;
export declare function isNull(v: any): boolean;
export declare function isNaN(v: any): boolean;
export declare function isFinite(v: any): boolean;
export declare function isInfinite(v: any): boolean;
export declare function isValue(v: any): boolean;
export declare function isString(v: any): boolean;
export declare function isBoolean(v: any): boolean;
export declare function isNumber(v: any): boolean;
export declare function isInteger(v: any): boolean;
export declare function isFloat(v: any): boolean;
export declare function isDate(v: any): boolean;
export declare function isObject(v: any): boolean;
export declare function isArray(v: any): boolean;
export declare function isAbsent(v: any): boolean;
export declare function isPresent(v: any): boolean;
export declare function isFunction(v: any): boolean;
export declare function isClass(v: any): boolean;
export declare function isPromise(v: any): boolean;
export declare function toString(v: any): string;
export declare function toBoolean(v: any): boolean;
export declare function toInteger(v: any): number;
export declare function toFloat(v: any): number;
export declare function toNumber(v: any): number;
export declare function toDate(v: any): Date;
export declare function toArray(v: any): Array<any>;
export declare type TypeBlock = (value: any, recipe: any) => any;
export declare function cast(value: any, type: any, types: {
    [type: string]: TypeBlock;
}): any;
