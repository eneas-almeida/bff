import { UserIntegrationOutputDto } from '@/framework/integrations/contracts';
import {
    toDesktop,
    toDesktopCollection,
    toMobile,
    toMobileCollection,
} from '@/infra/main/mappers/user.mapper';
import { Device, DeviceMap, UserOutputDto } from '../contracts';

export const userOutputDtoAdapter = (device: Device, data: UserIntegrationOutputDto): UserOutputDto => {
    const map: DeviceMap<UserOutputDto> = {
        [Device.DESKTOP]: () => toDesktop(data),
        [Device.MOBILE]: () => toMobile(data),
    };

    return (map[device] || map['DESKTOP'])();
};

export const userOutputDtoCollectionAdapter = (
    device: Device,
    data: UserIntegrationOutputDto[]
): UserOutputDto[] => {
    const map: DeviceMap<UserOutputDto[]> = {
        [Device.DESKTOP]: () => toDesktopCollection(data),
        [Device.MOBILE]: () => toMobileCollection(data),
    };

    return (map[device] || map['DESKTOP'])();
};
