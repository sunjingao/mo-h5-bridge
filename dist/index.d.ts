export declare const Bridge: {
    navigateTo: any;
    navigateBack: any;
    redirectTo: any;
    switchTab: any;
    getLocation: any;
    openLocation: any;
    postMessage: any;
    getToken: any;
    gotoOrderDetail: any;
    getAreas: any;
    updateAppMessageShareData: any;
    updateTimelineShareData: any;
    getArea: any;
};

export declare const BridgeReceive: BridgeReceiveCls;

declare class BridgeReceiveCls {
    constructor();
    add(key: any, value: any): this;
    delete(key: any, value: any): any;
    has(key: any, value: any): any;
    get(key: any): any;
    deleteKey(key: any): any;
    hasKey(key: any): any;
    keys(): any;
    values(): any;
    entries(): any;
    clear(): void;
    forEach(callback: any): void;
}

export declare function initBridge(arg: void | InitWxConfigType): Promise<void>;

export { }
