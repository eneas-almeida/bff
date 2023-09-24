export enum Device {
    MOBILE = 'MOBILE',
    DESKTOP = 'DESKTOP',
}

export type DeviceMap<T> = {
    [key in Device]: () => T;
}
