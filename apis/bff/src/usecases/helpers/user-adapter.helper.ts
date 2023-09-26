import { UserIntegrationOutputDto } from '@/framework/integrations/contracts';
import {
    toUserOutputDtoDesktop,
    toUserOutputDtoCollectionDesktop,
    toUserOutputDtoMobile,
    toUserOutputDtoCollectionMobile,
} from '@/main/mappers/user.mapper';
import { Device, DeviceMap, UserOutputDto } from '../contracts';

export const userOutputDtoAdapter = (device: Device, data: UserIntegrationOutputDto): UserOutputDto => {
    const map: DeviceMap<UserOutputDto> = {
        [Device.DESKTOP]: () => toUserOutputDtoDesktop(data),
        [Device.MOBILE]: () => toUserOutputDtoMobile(data),
    };

    return (map[device] || map['DESKTOP'])();
};

export const userOutputDtoCollectionAdapter = (
    device: Device,
    data: UserIntegrationOutputDto[]
): UserOutputDto[] => {
    const map: DeviceMap<UserOutputDto[]> = {
        [Device.DESKTOP]: () => toUserOutputDtoCollectionDesktop(data),
        [Device.MOBILE]: () => toUserOutputDtoCollectionMobile(data),
    };

    return (map[device] || map['DESKTOP'])();
};
