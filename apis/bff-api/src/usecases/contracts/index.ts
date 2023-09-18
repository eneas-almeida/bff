export enum DeviceEnum {
    MOBILE = 'MOBILE',
    DESKTOP = 'DESKTOP',
}

export interface DeviceMap<T = OutputUserDto> {
    [DeviceEnum.MOBILE]: () => T;
    [DeviceEnum.DESKTOP]: () => T;
}

export interface OutputHealthzDto {
    name: string;
    version: string;
}

export interface OutputUserDto {
    id?: string;
    document?: number;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserUseCaseInterface {
    findOne: (device: string, userId: string) => Promise<OutputUserDto>;
    list: (device: string) => Promise<OutputUserDto[]>;
}
