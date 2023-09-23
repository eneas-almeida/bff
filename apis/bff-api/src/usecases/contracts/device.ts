export enum Device {
    MOBILE = 'MOBILE',
    DESKTOP = 'DESKTOP',
}

export interface DeviceMap<T> {
    [Device.MOBILE]: () => T;
    [Device.DESKTOP]: () => T;
}
